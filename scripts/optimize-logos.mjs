import sharp from "sharp";
import { readFile, writeFile, stat } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const A = join(__dirname, "../src/assets");

const files = [
  { p: join(A, "portafolio/callos.webp"),    w: 400, q: 80 },
  { p: join(A, "portafolio/campestre.webp"), w: 400, q: 80 },
  { p: join(A, "portafolio/lucca.webp"),     w: 400, q: 80 },
  { p: join(A, "portafolio/felix.webp"),     w: 400, q: 80 },
  { p: join(A, "portafolio/bm.webp"),        w: 400, q: 80 },
  { p: join(A, "portafolio/sirloncito.webp"),w: 400, q: 80 },
  { p: join(A, "portafolio/faisan.webp"),    w: 400, q: 80 },
  { p: join(A, "portafolio/asbios.webp"),    w: 400, q: 80 },
  { p: join(A, "portafolio/cerritos.webp"),  w: 400, q: 80 },
  { p: join(A, "portafolio/clinica.webp"),   w: 400, q: 80 },
  { p: join(A, "portafolio/ms agros.webp"),  w: 400, q: 80 },
  { p: join(A, "logoclicheoriginal.webp"),   w: 400, q: 85 },
  { p: join(A, "logoclichenegro.webp"),      w: 400, q: 85 },
  { p: join(A, "logoclichemodooscuro.webp"), w: 400, q: 85 },
  { p: join(A, "logoclicheblanco.webp"),     w: 400, q: 85 },
];

console.log("\n[Optimizar WebP logos]\n");
let totalBefore = 0, totalAfter = 0;

for (const { p, w, q } of files) {
  const name = p.split(/[\\/]/).pop().padEnd(28);
  const { size: before } = await stat(p);
  totalBefore += before;
  const input = await readFile(p);
  const buf = await sharp(input)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: q, effort: 6 })
    .toBuffer();
  totalAfter += buf.length;
  if (buf.length < before) {
    await writeFile(p, buf);
    console.log(`  ✓  ${name} ${(before/1024).toFixed(1).padStart(7)} KB → ${(buf.length/1024).toFixed(1).padStart(6)} KB  (-${(((before-buf.length)/before)*100).toFixed(1)}%)`);
  } else {
    console.log(`  –  ${name} ya óptimo (${(before/1024).toFixed(1)} KB)`);
  }
}

console.log(`\n  Total: ${(totalBefore/1024).toFixed(1)} KB → ${(totalAfter/1024).toFixed(1)} KB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(1)}%)\n`);
