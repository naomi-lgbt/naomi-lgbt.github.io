const { readFile, writeFile } = require("fs/promises");
const { join } = require("path");
const djson = require('dirty-json');

(async () => {
    const outfitsPath = join(process.cwd(), "src", "assets", "data", "outfits.ts");
    const outfitsData = await readFile(outfitsPath, 'utf-8');
    const cleanedData = outfitsData.replace(`import { Outfit } from 'src/interfaces/Outfit';\n\nexport const Outfits: Outfit[] = `, '').replace(";", '');
    const parsedData = djson.parse(cleanedData);
    const data = JSON.stringify(parsedData, null, 2);
    await writeFile(join(process.cwd(), "src", "assets", "data", "outfits.json"), data, "utf-8");
})();