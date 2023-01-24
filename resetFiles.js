const { writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
  const dataFile = join(process.cwd(), "src", "assets", "fileList.ts");

  await writeFile(
    dataFile,
    `export const artFiles: string[] = [];\nexport const emotesFiles: string[] = [];\nexport const gamesFiles: string[] = [];\nexport const outfitsFiles: string[] = [];\nexport const tattooFiles: string[] = []\n`  );
})();
