import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import { readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

ffmpeg.setFfmpegPath(ffmpegStatic);

const __dirname = dirname(fileURLToPath(import.meta.url));
const videosDir = join(__dirname, "../src/assets/videos servicios");

const files = readdirSync(videosDir).filter((f) => f.endsWith(".mp4"));

const fmt = (bytes) => (bytes / 1024 / 1024).toFixed(2) + " MB";

const processNext = (index) => {
  if (index >= files.length) {
    console.log("\n✅ Todos los videos optimizados.");
    return;
  }

  const file = files[index];
  const input = join(videosDir, file);
  const output = join(videosDir, "__opt_" + file);
  const before = statSync(input).size;

  console.log(`\n[${index + 1}/${files.length}] ${file} (${fmt(before)})`);

  ffmpeg(input)
    .videoCodec("libx264")
    .addOption("-crf", "30")
    .addOption("-preset", "slow")
    .addOption("-vf", "scale=trunc(iw*min(1\\,720/ih)/2)*2:trunc(ih*min(1\\,720/ih)/2)*2")
    .addOption("-an")
    .addOption("-movflags", "+faststart")
    .addOption("-pix_fmt", "yuv420p")
    .output(output)
    .on("end", () => {
      const after = statSync(output).size;
      const saved = (((before - after) / before) * 100).toFixed(0);
      console.log(`   ✓ ${fmt(before)} → ${fmt(after)} (-${saved}%)`);

      // Replace original with optimized
      import("fs").then(({ renameSync, unlinkSync }) => {
        try { unlinkSync(input); } catch {}
        renameSync(output, input);
        processNext(index + 1);
      });
    })
    .on("error", (err) => {
      console.error(`   ✗ Error: ${err.message}`);
      import("fs").then(({ unlinkSync }) => {
        try { unlinkSync(output); } catch {}
        processNext(index + 1);
      });
    })
    .run();
};

processNext(0);
