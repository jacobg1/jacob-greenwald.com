import React, { useMemo, type ReactElement } from "react";

import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { GatsbyBrowser } from "gatsby";

import { SiteThemeContext } from "../context/site-theme-context";
import { useLocalStorage } from "../hooks/use-local-storage";
import { getTheme } from "../theme";
import { SITE_THEME_KEY, SiteTheme } from "../types/enum";

interface WrapperProps {
  element: ReactElement;
}

const Wrapper = ({ element }: WrapperProps): JSX.Element | null => {
  const [selectedTheme, setSiteTheme] = useLocalStorage(
    SITE_THEME_KEY,
    SiteTheme.SILVER,
    ""
  );

  const theme = useMemo(() => {
    if (selectedTheme) return getTheme(selectedTheme as SiteTheme);
    return null;
  }, [selectedTheme]);

  return (
    <SiteThemeContext.Provider
      value={{ siteTheme: selectedTheme as SiteTheme, setSiteTheme }}
    >
      {theme ? (
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      ) : (
        <Box sx={{ display: "none" }}>{element}</Box>
      )}
    </SiteThemeContext.Provider>
  );
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <Wrapper element={element} />;
};
