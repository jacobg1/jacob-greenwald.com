import { testThemeMap } from "../../../__utils__";
import { ThemeMap } from "../../types";
import { getThemeBackgroundColor, styleOverridesResolver } from "../theme";

describe("theme utils", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getThemeBackgroundColor works properly", () => {
    const output = getThemeBackgroundColor(testThemeMap as unknown as ThemeMap);

    Object.entries(testThemeMap).forEach(([key, { themeColor }]) => {
      const selector = `& .${key.toLocaleLowerCase()}-theme`;
      expect(output[selector].backgroundColor).toBe(themeColor);
    });
  });

  it("styleOverridesResolver works properly", () => {
    const input = {
      root: {
        test: true,
      },
    };
    const output = styleOverridesResolver(undefined, input);
    expect(output).toEqual(input.root);
  });
});
