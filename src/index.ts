import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

const imagesDir = path.join("images");
const outputDir = path.join("output");

const images = fs.readdirSync(imagesDir);

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

fs.mkdirSync(outputDir);

images.forEach((image) => {
  sharp(path.join(imagesDir, image))
    // .resize(1080, 1080)
    .resize(1080, 1080, { fit: "inside" })
    .toFile(path.join(outputDir, image));
  // .toFile(path.join(outputDir, nanoid() + ".jpg"));
});
