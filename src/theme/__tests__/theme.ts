import { themeColorLookup } from "../../../__utils__";
import { SiteTheme } from "../../types";
import { getTheme } from "../theme";

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
      expect(main).toBe(themeColorLookup[siteTheme]);
    });
  });

  it("if theme is not properly configured, returns the default theme", () => {
    const theme = getTheme("TEST" as SiteTheme);
    const {
      palette: {
        primary: { main },
      },
    } = theme;
    expect(main).toBe(themeColorLookup[SiteTheme.SILVER]);
  });
});
