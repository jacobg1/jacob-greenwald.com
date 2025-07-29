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

export function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
}
