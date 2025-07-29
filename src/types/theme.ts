import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme as MuiTheme,
} from "@mui/material/styles";

import { SiteTheme } from "./enum";

export type CustomTheme = Omit<MuiTheme, "components">;

declare module "@mui/material/styles" {
  interface ComponentNameToClassKey {
    MuiFooter: "root";
    MuiPageContainer: "root";
    MuiMobileHeaderContainer: "root";
  }

  interface ComponentsPropsList {
    // Update unknown to type of props if props are used
    MuiFooter: Partial<Record<string, never>>;
    MuiPageContainer: Partial<Record<string, never>>;
    MuiMobileHeaderContainer: Partial<Record<string, never>>;
  }

  interface Components {
    MuiFooter?: {
      defaultProps?: ComponentsPropsList["MuiFooter"];
      styleOverrides?: ComponentsOverrides<CustomTheme>["MuiFooter"];
      variants?: ComponentsVariants["MuiFooter"];
    };
    MuiPageContainer?: {
      defaultProps?: ComponentsPropsList["MuiPageContainer"];
      styleOverrides?: ComponentsOverrides<CustomTheme>["MuiPageContainer"];
      variants?: ComponentsVariants["MuiPageContainer"];
    };
    MuiMobileHeaderContainer?: {
      defaultProps?: ComponentsPropsList["MuiMobileHeaderContainer"];
      styleOverrides?: ComponentsOverrides<CustomTheme>["MuiMobileHeaderContainer"];
      variants?: ComponentsVariants["MuiMobileHeaderContainer"];
    };
  }
}

export interface ThemeConfig {
  themeColor: string;
  text: {
    color: string;
  };
  mobileHeader: {
    backgroundColor: string;
  };
  header: {
    color: string;
    backgroundColor: string;
    borderBottom: string;
  };
  footer: {
    backgroundColor: string;
    borderTop: string;
  };
  main: {
    backgroundColor: string;
  };
  divider: {
    border: string;
  };
  button: {
    "&:hover": {
      border: string;
    };
    backgroundColor: string;
    border: string;
    color: string;
  };
  iconColor: string;
  skillsButton: {
    color: string;
    backgroundColor: string;
    "&:hover": {
      backgroundColor: string;
    };
  };
}

export type ThemeMap = {
  [key in SiteTheme]: ThemeConfig;
};

export type ThemeBackgroundColor = {
  [key: string]: { [key: string]: string };
};
