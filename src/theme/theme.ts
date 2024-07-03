import { createTheme } from "@mui/material/styles";

import { CustomTheme } from "./theme-type";
import {
  goldTheme,
  goldThemeColor,
  silverTheme as defaultTheme,
  silverThemeColor,
} from "./themes";
import { SiteTheme } from "../types/enum";

const themeMap = {
  [SiteTheme.SILVER]: defaultTheme,
  [SiteTheme.GOLD]: goldTheme,
};

export function getTheme(siteTheme: SiteTheme): CustomTheme {
  const {
    header,
    footer,
    main,
    mobileHeader,
    divider,
    button,
    iconColor,
    skillsButton,
  } = themeMap?.[siteTheme] || defaultTheme;

  let theme = createTheme();
  theme = createTheme({
    typography: {
      fontFamily: ["Overpass", "sans-serif"].join(","),
      body1: {
        fontSize: "16px",
        fontWeight: 400,
        color: "#000000",
        [theme.breakpoints.up("sm")]: {
          fontSize: "18px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "22px",
        },
      },
      subtitle1: {
        fontSize: "14px",
        fontWeight: 600,
        color: "#000000",
        [theme.breakpoints.up("sm")]: {
          fontSize: "18px",
        },
      },
      h1: {
        fontSize: "25px",
        fontWeight: 600,
        [theme.breakpoints.up("sm")]: {
          fontSize: "28px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "30px",
        },
      },
      h2: {
        fontSize: "20px",
        color: "#000000",
        fontWeight: 700,
        [theme.breakpoints.up("sm")]: {
          fontSize: "30px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "32px",
        },
      },
      h3: {
        fontSize: "25px",
        color: "#000000",
        fontWeight: 700,
        [theme.breakpoints.up("sm")]: {
          fontSize: "35px",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "38px",
        },
      },
    },
    components: {
      MuiMobileHeaderContainer: {
        styleOverrides: {
          root: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px 20px 20px",
            alignItems: "center",
            color: "#000000",
            a: {
              color: "#000000",
            },
            ...mobileHeader,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            minWidth: "320px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "& .title-link": {
              color: "inherit",
              textDecoration: "none",
            },
            ...header,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#000000",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            display: "none",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            opacity: 1,
            "&.Mui-selected": {
              border: button.border,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: button,
        },
      },
      MuiFooter: {
        styleOverrides: {
          root: {
            position: "absolute",
            width: "100%",
            minWidth: "320px",
            ...footer,
          },
        },
      },
      MuiPageContainer: {
        styleOverrides: {
          root: {
            main: {
              padding: "20px 20px 20px",
              minHeight: "calc(100vh - 70px)",
              minWidth: "320px",
              ...main,
            },
            "& .page-content": {
              p: {
                color: "#000000",
              },
              a: {
                textDecoration: "none",
                color: "#014b95",
                fontWeight: 600,
              },
            },
            "& .divider": divider,
            "& .project-icon svg path": {
              fill: iconColor,
            },
            "& .skills-section": {
              "& .button-link": skillsButton,
            },
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            "& .silver-theme": {
              backgroundColor: silverThemeColor,
            },
            "& .gold-theme": {
              backgroundColor: goldThemeColor,
            },
          },
        },
      },
    },
  });

  return theme as CustomTheme;
}
