import { createContext } from "react";

import { SiteTheme } from "../types/enum";

interface ColorThemeContextType {
  siteTheme: SiteTheme;
  setSiteTheme: (selectedTheme: SiteTheme) => void;
}

export const SiteThemeContext = createContext<ColorThemeContextType>({
  siteTheme: SiteTheme.SILVER,
  setSiteTheme: () => {},
});
