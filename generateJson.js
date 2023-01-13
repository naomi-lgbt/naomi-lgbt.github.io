const { readdir, writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
    const outfitsPath = join(process.cwd(), "src", "assets", "img", "outfits");
    const outfitsFiles = await readdir(outfitsPath);
    const data = JSON.stringify(outfitsFiles);
    await writeFile(join(process.cwd(), "src", "assets", "data", "outfits.json"), data, "utf-8");
})();