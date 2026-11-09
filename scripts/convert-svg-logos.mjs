/**
 * Extracts the base64-encoded raster image from each portfolio SVG,
 * converts it to a compressed WebP, deletes the original SVG,
 * and reports savings.
 */
import sharp from "sharp";
import { readFile, writeFile, unlink, stat } from "fs/promises";
import { join, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const portDir = join(__dirname, "../src/assets/portafolio");

// SVGs that contain embedded raster images (confirmed by file size > 100 KB)
const rasterSvgs = ["callos.svg", "campestre.svg", "lucca.svg", "bm.svg", "felix.svg", "asbios.svg"];

let totalSaved = 0;

console.log("\n[Portfolio SVGs] Extracting embedded raster images → WebP...\n");

for (const svgName of rasterSvgs) {
  const svgPath = join(portDir, svgName);
  let svgText;
  try {
    svgText = await readFile(svgPath, "utf8");
  } catch {
    console.log(`  –  ${svgName} not found, skipping`);
    continue;
  }

  // Extract base64 payload from data:image/...;base64, pattern
  const match = svgText.match(/data:image\/(?:png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=\s]+)/);
  if (!match) {
    console.log(`  –  ${svgName} has no embedded raster image (skip)`);
    continue;
  }

  const b64 = match[1].replace(/\s/g, "");
  const rawBuf = Buffer.from(b64, "base64");
  const { size: origSize } = await stat(svgPath);

  // Convert to WebP at max 600px width, quality 82
  const webpBuf = await sharp(rawBuf)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();

  const webpName = svgName.replace(/\.svg$/, ".webp");
  const webpPath = join(portDir, webpName);
  await writeFile(webpPath, webpBuf);
  await unlink(svgPath);

  totalSaved += origSize - webpBuf.length;
  console.log(
    `  ✓  ${svgName.padEnd(20)} → ${webpName.padEnd(20)}` +
    `  ${(origSize / 1024).toFixed(0).padStart(5)} KB → ${(webpBuf.length / 1024).toFixed(0).padStart(4)} KB` +
    `  (-${(((origSize - webpBuf.length) / origSize) * 100).toFixed(1)}%)`
  );
}

console.log(`\n${"─".repeat(60)}`);
console.log(`✅  SVG portfolio logos freed: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
console.log(`${"─".repeat(60)}\n`);
console.log("Next: update PortfolioSection.tsx imports (.svg → .webp)\n");
