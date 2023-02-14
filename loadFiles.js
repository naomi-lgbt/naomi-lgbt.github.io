const { readdir, writeFile } = require("fs/promises");
const { join } = require("path");
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

(async () => {
  const dataFile = join(process.cwd(), "src", "assets", "fileList.ts");

  const rawArt = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=art');
  const artText = await rawArt.text();
  const artData = await parser.parseStringPromise(artText);
  const art = artData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]).filter(el => el);

  const rawEmotes = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=emotes');
  const emotesText = await rawEmotes.text();
  const emotesData = await parser.parseStringPromise(emotesText);
  const emotes = emotesData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]).filter(el => el);

  const rawGames = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=games');
  const gamesText = await rawGames.text();
  const gamesData = await parser.parseStringPromise(gamesText);
  const games = gamesData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]).filter(el => el);

  const rawOutfits = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=outfit');
  const outfitText = await rawOutfits.text();
  const outfitData = await parser.parseStringPromise(outfitText);
  const outfits = outfitData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]).filter(el => el);

  const rawPoses = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=koikatsu');
  const posesText = await rawPoses.text();
  const posesData = await parser.parseStringPromise(posesText);
  const poses = posesData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[1]).filter(el => el);

  const rawTattoos = await fetch('https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=ref/tattoos');
  const tattoosText = await rawTattoos.text();
  const tattoosData = await parser.parseStringPromise(tattoosText);
  const tattoos = tattoosData['ListBucketResult']['Contents'].map(i => i['Key'][0].split('/')[2]).filter(el => el);

  await writeFile(
    dataFile,
    `export const artFiles: string[] = ${JSON.stringify(
      art
    )};\nexport const emotesFiles: string[] = ${JSON.stringify(
      emotes
    )};\nexport const gamesFiles: string[] = ${JSON.stringify(
      games
    )};\nexport const outfitsFiles: string[] = ${JSON.stringify(outfits)};\nexport const posesFiles: string[] = ${JSON.stringify(poses)};\nexport const tattooFiles: string[] = ${JSON.stringify(tattoos)};\n`
  );
})();
