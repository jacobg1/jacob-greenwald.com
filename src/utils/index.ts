import { type EmojiConfig, SiteTheme, SliderDirection } from "../types";

export function createTagPageSlug(tagName: string): string {
  return tagName.toLocaleLowerCase().replace(/ /g, "-");
}

export function createTagPageLink(tagName: string): string {
  return `/tags/${createTagPageSlug(tagName)}/`;
}

export function pluralWord(num: number, word: string): string {
  if (num === 1) return word;
  return `${word}s`;
}

export const includesBlog = (
  normalizePath: string,
  destination: string
): boolean => {
  return normalizePath.includes("blog") && destination.includes("blog");
};

export const includesTags = (
  normalizePath: string,
  destination: string
): boolean => {
  return normalizePath.includes("tags") && destination.includes("blog");
};

export function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
}

export function getEmojisToShow(
  siteTheme: SiteTheme,
  emojis: EmojiConfig[]
): EmojiConfig[] {
  return emojis.reduce((acc: EmojiConfig[], curr) => {
    if ("is" in curr.theme) {
      if (curr.theme.is.includes(siteTheme)) {
        return [...acc, curr];
      }
    }

    if ("not" in curr.theme) {
      if (!curr.theme.not.includes(siteTheme)) {
        return [...acc, curr];
      }
    }

    return acc;
  }, []);
}

export function handleSliderArrow(
  dir: SliderDirection,
  value: number,
  numProjects: number
): number {
  const lastProject = numProjects - 1;

  if (dir === SliderDirection.LEFT) {
    const isFirst = value === 0;
    return isFirst ? lastProject : value - 1;
  } else {
    const isLast = value === lastProject;
    return isLast ? 0 : value + 1;
  }
}
