import sharp from "sharp";
import { readFileSync } from "fs";

const gradientSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#0149a8"/>
      <stop offset="100%" stop-color="#82fffb"/>
    </linearGradient>
  </defs>
  <rect width="2000" height="1000" fill="url(#g)"/>
</svg>`);

const gradBuf = await sharp(gradientSvg).resize(2000, 1000).png().toBuffer();

await sharp("src/assets/logoclicheblanco.png")
  .composite([{ input: gradBuf, blend: "in" }])
  .png()
  .toFile("src/assets/logoclichegradient.png");

console.log("✓ logoclichegradient.png generado");
