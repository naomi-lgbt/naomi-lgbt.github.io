const { readdir, writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
  const dataFile = join(process.cwd(), "src", "assets", "fileList.ts");

  const artPath = join(process.cwd(), "src", "assets", "img", "art");
  const emotesPath = join(process.cwd(), "src", "assets", "img", "emotes");
  const gamesPath = join(process.cwd(), "src", "assets", "img", "games");
  const outfitsPath = join(process.cwd(), "src", "assets", "img", "outfits");

  const artFiles = await readdir(artPath);
  const emotesFiles = await readdir(emotesPath);
  const gamesFiles = await readdir(gamesPath);
  const outfitsFiles = await readdir(outfitsPath);

  await writeFile(
    dataFile,
    `export const artFiles = ${JSON.stringify(
      artFiles
    )};\nexport const emotesFiles = ${JSON.stringify(
      emotesFiles
    )};\nexport const gamesFiles = ${JSON.stringify(
      gamesFiles
    )};\nexport const outfitsFiles = ${JSON.stringify(outfitsFiles)};\n`
  );
})();
