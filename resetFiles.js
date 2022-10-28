const { writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
  const dataFile = join(process.cwd(), "src", "assets", "fileList.ts");

  await writeFile(
    dataFile,
    `export const artFiles = [];\nexport const emotesFiles = [];\nexport const gamesFiles = [];\nexport const outfitsFiles = [];\n`
  );
})();
