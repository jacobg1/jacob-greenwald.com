import { SiteTheme } from "./enum";

type IS = { is: SiteTheme[] };
type NOT = { not: SiteTheme[] };

export interface EmojiConfig {
  name: string;
  emoji: string;
  theme: IS | NOT;
}

export interface ThemeEmojiProps {
  emojis: EmojiConfig[];
}
