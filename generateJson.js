const { readFile, writeFile } = require("fs/promises");
const { join } = require("path");
const djson = require('dirty-json');

(async () => {
    // Outfits
    const outfitsPath = join(process.cwd(), "src", "app", "_data", "outfits.ts");
    const outfitsData = await readFile(outfitsPath, 'utf-8');
    const cleanedOutfitData = outfitsData.replace(`import { Outfit } from 'src/interfaces/Outfit';\n\nexport const Outfits: Outfit[] = `, '').replace(";", '');
    const parsedOutfitData = djson.parse(cleanedOutfitData);
    const outfitData = JSON.stringify(parsedOutfitData, null, 2);
    await writeFile(join(process.cwd(), "src", "assets", "data", "outfits.json"), outfitData, "utf-8");

    // Adventures

    const adventuresPath = join(process.cwd(), "src", "app", "_data", "adventures.ts");
    const adventuresData = await readFile(adventuresPath, 'utf-8');
    const cleanedAdventureData = adventuresData.replace(`import { Adventure } from 'src/interfaces/Adventure';\n\nexport const adventures: Adventure[] = `, '').replace(";", '');
    const parsedAdventureData = djson.parse(cleanedAdventureData);
    const adventureData = JSON.stringify(parsedAdventureData, null, 2);
    await writeFile(join(process.cwd(), "src", "assets", "data", "adventures.json"), adventureData, "utf-8");

    // Art

    const artPath = join(process.cwd(), "src", "app", "_data", "portraits.ts");
    const artData = await readFile(artPath, 'utf-8');
    const cleanedArtData = artData.replace(`import { Portrait } from 'src/interfaces/Portrait';\n\nexport const portraits: Portrait[] = `, '').replace(";", '');
    const parsedArtData = djson.parse(cleanedArtData);
    const portraitData = JSON.stringify(parsedArtData, null, 2);
    await writeFile(join(process.cwd(), "src", "assets", "data", "portraits.json"), portraitData, "utf-8");

    // Emotes

    const emotesPath = join(process.cwd(), "src", "app", "_data", "emotes.ts");
    const emotesData = await readFile(emotesPath, 'utf-8');
    const cleanedEmotesData = emotesData.replace(`import { Emote } from 'src/interfaces/Emote';\n\nexport const emotes: Emote[] = `, '').replace(";", '');
    const parsedEmotesData = djson.parse(cleanedEmotesData);
    const emoteData = JSON.stringify(parsedEmotesData, null, 2);
    await writeFile(join(process.cwd(), "src", "assets", "data", "emotes.json"), emoteData, "utf-8");
})();