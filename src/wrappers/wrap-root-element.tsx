import React, { useMemo, ReactElement, useSyncExternalStore } from "react";

import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";

import { SiteThemeContext } from "../context/site-theme-context";
import { getTheme } from "../theme";
import { SITE_THEME_KEY, SiteTheme } from "../types/enum";

interface WrapperProps {
  element: ReactElement;
}

function themeFromLocalStorage(): SiteTheme {
  return (
    (localStorage.getItem(SITE_THEME_KEY) as SiteTheme) || SiteTheme.SILVER
  );
}

function themeFromServer(): null {
  return null;
}

function subscribeToLocalStorage(cb: () => void): () => void {
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("storage", cb);
  };
}

function setSiteTheme(selectedTheme: SiteTheme): void {
  localStorage.setItem(SITE_THEME_KEY, selectedTheme);
  window.dispatchEvent(new Event("storage"));
}

const Wrapper = ({ element }: WrapperProps): JSX.Element | null => {
  const selectedTheme = useSyncExternalStore(
    subscribeToLocalStorage,
    themeFromLocalStorage,
    themeFromServer
  );

  const theme = useMemo(() => {
    if (selectedTheme) return getTheme(selectedTheme);
    return null;
  }, [selectedTheme]);

  if (!theme) return null;

  return (
    <SiteThemeContext.Provider
      value={{ siteTheme: selectedTheme as SiteTheme, setSiteTheme }}
    >
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <Wrapper element={element} />;
};
