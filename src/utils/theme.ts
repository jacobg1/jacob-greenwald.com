import type { ThemeMap, ThemeBackgroundColor } from "../theme";

export function getThemeBackgroundColor(
  themeMap: ThemeMap
): ThemeBackgroundColor {
  return Object.entries(themeMap).reduce((acc, [key, { themeColor }]) => {
    const styleSelector = `& .${key.toLocaleLowerCase()}-theme`;

    return {
      ...acc,
      [styleSelector]: { backgroundColor: themeColor },
    };
  }, {});
}
