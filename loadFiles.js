const { readdir, writeFile } = require("fs/promises");
const { join } = require("path");
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

(async () => {
  const dataFile = join(process.cwd(), "src", "assets", "fileList.ts");

  const rawArt = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=art');
  const artText = await rawArt.text();
  const artData = await parser.parseStringPromise(artText);
  const art = artData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]);

  const rawEmotes = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=emotes');
  const emotesText = await rawEmotes.text();
  const emotesData = await parser.parseStringPromise(emotesText);
  const emotes = emotesData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]);

  const rawGames = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=games');
  const gamesText = await rawGames.text();
  const gamesData = await parser.parseStringPromise(gamesText);
  const games = gamesData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]);

  const rawOutfits = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=outfit');
  const outfitText = await rawOutfits.text();
  const outfitData = await parser.parseStringPromise(outfitText);
  const outfits = outfitData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]);

  const rawTattoos = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=ref/tattoos');
  const tattoosText = await rawTattoos.text();
  const tattoosData = await parser.parseStringPromise(tattoosText);
  const tattoos = tattoosData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[2]);

  await writeFile(
    dataFile,
    `export const artFiles = ${JSON.stringify(
      art
    )};\nexport const emotesFiles = ${JSON.stringify(
      emotes
    )};\nexport const gamesFiles = ${JSON.stringify(
      games
    )};\nexport const outfitsFiles = ${JSON.stringify(outfits)};\nexport const tattooFiles = ${JSON.stringify(tattoos)};\n`
  );
})();
