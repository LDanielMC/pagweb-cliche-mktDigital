import sharp from "sharp";
import { readdir, readFile, stat, writeFile } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

async function writeAtomic(dest, buf) {
  await writeFile(dest, buf);
}

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS    = join(__dirname, "../src/assets");

let totalSaved = 0;

// ─── 1. Delete unused PNG duplicates (webp versions already exist) ─────────
const unusedPngs = [
  join(ASSETS, "portafolio/faisan.png"),
  join(ASSETS, "portafolio/sirloncito.png"),
  join(ASSETS, "portafolio/cerritos.png"),
  join(ASSETS, "portafolio/clinica.png"),
  join(ASSETS, "portafolio/ms agros.png"),
];

console.log("\n[Unused files] Deleting PNG duplicates (webp versions already used)...\n");
for (const p of unusedPngs) {
  try {
    const { size } = await stat(p);
    await unlink(p);
    totalSaved += size;
    console.log(`  🗑  ${basename(p).padEnd(30)} freed ${(size/1024).toFixed(0)} KB`);
  } catch {
    console.log(`  –  ${basename(p)} not found, skipping`);
  }
}

// ─── 2. Re-compress WebP hero images (quality 72, max 900px) ───────────────
const heroDir = join(ASSETS, "FOTOSPAGINA");
const heroFiles = (await readdir(heroDir)).filter(f => extname(f).toLowerCase() === ".webp");

console.log(`\n[Hero photos] Re-compressing ${heroFiles.length} WebP files (max 900px, q72)...\n`);
for (const file of heroFiles) {
  const filePath = join(heroDir, file);
  const { size: before } = await stat(filePath);
  const input = await readFile(filePath);
  const buf = await sharp(input)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 72, effort: 5 })
    .toBuffer();
  if (buf.length < before) {
    try {
      await writeAtomic(filePath, buf);
      totalSaved += before - buf.length;
      console.log(`  ✓  ${file.padEnd(30)} ${(before/1024).toFixed(0).padStart(5)} KB → ${(buf.length/1024).toFixed(0).padStart(4)} KB  (-${(((before-buf.length)/before)*100).toFixed(1)}%)`);
    } catch {
      console.log(`  ✗  ${file.padEnd(30)} LOCKED — skipped (close browser preview to unlock)`);
    }
  } else {
    console.log(`  –  ${file.padEnd(30)} already optimal (${(before/1024).toFixed(0)} KB)`);
  }
}

// ─── 3. Re-compress WebP portfolio logos (quality 80, max 500px) ──────────
const portDir = join(ASSETS, "portafolio");
const portWebp = (await readdir(portDir)).filter(f => extname(f).toLowerCase() === ".webp");

console.log(`\n[Portfolio logos] Re-compressing ${portWebp.length} WebP files (max 500px, q80)...\n`);
for (const file of portWebp) {
  const filePath = join(portDir, file);
  const { size: before } = await stat(filePath);
  const buf = await sharp(filePath)
    .resize({ width: 500, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toBuffer();
  if (buf.length < before) {
    try {
      await writeAtomic(filePath, buf);
      totalSaved += before - buf.length;
      console.log(`  ✓  ${file.padEnd(30)} ${(before/1024).toFixed(0).padStart(5)} KB → ${(buf.length/1024).toFixed(0).padStart(4)} KB  (-${(((before-buf.length)/before)*100).toFixed(1)}%)`);
    } catch {
      console.log(`  ✗  ${file.padEnd(30)} LOCKED — skipped`);
    }
  } else {
    console.log(`  –  ${file.padEnd(30)} already optimal`);
  }
}

// ─── 4. Compress logoclicheblanco.png in-place ────────────────────────────
const logoPng = join(ASSETS, "logoclicheblanco.png");
try {
  const { size: before } = await stat(logoPng);
  const buf = await sharp(logoPng).png({ compressionLevel: 9, quality: 90 }).toBuffer();
  if (buf.length < before) {
    await writeAtomic(logoPng, buf);
    totalSaved += before - buf.length;
    console.log(`\n[Logo PNG]  logoclicheblanco.png  ${(before/1024).toFixed(0)} KB → ${(buf.length/1024).toFixed(0)} KB  (-${(((before-buf.length)/before)*100).toFixed(1)}%)`);
  }
} catch (e) {
  console.log("\n[Logo PNG] logoclicheblanco.png not found, skipping");
}

// ─── Summary ──────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(55)}`);
console.log(`✅  Total space freed: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
console.log(`${"─".repeat(55)}\n`);
console.log("Next: run  npx svgo -r src/assets --multipass  to compress SVGs\n");
