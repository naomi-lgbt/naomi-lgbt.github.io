import { Adventure } from './Adventure';
import { Emote } from './Emote';
import { Outfit } from './Outfit';
import { Portrait } from './Portrait';

export interface Assets {
  adventures: Adventure[];
  emotes: Emote[];
  outfits: Outfit[];
  portraits: Portrait[];
  poses: string[];
}
