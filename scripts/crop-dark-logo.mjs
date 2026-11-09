import { readFile, writeFile } from "fs/promises";

const path = "src/assets/logoclichemodooscuro.svg";
let svg = await readFile(path, "utf8");

// Original viewBox is "0 0 375 374.999991" — canvas is 375x375 square
// The logo content sits between y≈96 and y≈276 (per clipPath in the SVG)
// Crop to just the logo region: x=0, y=88, width=375, height=200
svg = svg.replace(/viewBox="0 0 375 374\.999991"/, `viewBox="0 88 375 200"`);

await writeFile(path, svg, "utf8");
console.log("viewBox cropped: logo region only (0 88 375 200)");
