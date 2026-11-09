import { readFile, writeFile } from "fs/promises";

const path = "src/assets/logoclichemodooscuro.svg";
let svg = await readFile(path, "utf8");

// Original SVG viewBox: "0 0 768 384" → ratio 2:1
// Dark SVG logo content: x=5..365 (360px wide), y=96..276 (180px tall) → also 2:1
// Set viewBox to exactly that region and fix width/height to match same ratio
svg = svg
  .replace(/viewBox="[^"]*"/, `viewBox="5 96 360 180"`)
  .replace(/width="500"/, `width="720"`)
  .replace(/height="500"/, `height="360"`);

await writeFile(path, svg, "utf8");
console.log("Fixed: viewBox=5 96 360 180  (ratio 2:1, matches original)");
