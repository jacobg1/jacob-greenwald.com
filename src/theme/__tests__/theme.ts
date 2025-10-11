import { SiteTheme } from "../../types";
import { getTheme } from "../theme";

const themeColorLookup = {
  [SiteTheme.SILVER]: "#014b95",
  [SiteTheme.GOLD]: "#b10c0c",
  [SiteTheme.BRONZE]: "#900c3f",
  [SiteTheme.CLASSIC]: "#0000cc",
  [SiteTheme.NEON]: "#f00",
  [SiteTheme.CAKE]: "#a90000",
};

describe("get theme", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the correct theme", () => {
    Object.values(SiteTheme).forEach((siteTheme) => {
      const theme = getTheme(siteTheme);
      const {
        palette: {
          primary: { main },
        },
      } = theme;
      expect(main).toEqual(themeColorLookup[siteTheme]);
    });
  });

  it("if theme is not properly configured, returns the default theme", () => {
    const theme = getTheme("TEST" as SiteTheme);
    const {
      palette: {
        primary: { main },
      },
    } = theme;
    expect(main).toEqual(themeColorLookup[SiteTheme.SILVER]);
  });
});
