import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { createTheme } from "@mui/material/styles";

import {
  bronzeTheme,
  goldTheme,
  silverTheme as defaultTheme,
  classicTheme,
  neonTheme,
  cakeTheme,
} from "./themes";
import { SiteTheme, type CustomTheme, type ThemeMap } from "../types";
import { getThemeBackgroundColor } from "../utils";

const themeMap: ThemeMap = {
  [SiteTheme.SILVER]: defaultTheme,
  [SiteTheme.GOLD]: goldTheme,
  [SiteTheme.BRONZE]: bronzeTheme,
  [SiteTheme.CLASSIC]: classicTheme,
  [SiteTheme.NEON]: neonTheme,
  [SiteTheme.CAKE]: cakeTheme,
};

const themeBackgroundColors = getThemeBackgroundColor(themeMap);

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
    text,
  } = themeMap?.[siteTheme] || defaultTheme;

  let theme = createTheme();
  theme = createTheme({
    palette: {
      primary: { main: iconColor },
    },
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
            "& .back": {
              color: iconColor,
              cursor: "pointer",
            },
            "& .page-content, .single-blog": {
              p: {
                color: "#000000",
              },
              a: {
                textDecoration: "none",
                color: iconColor,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              },
              "& .next-post-link:hover": {
                textDecoration: "none",
              },
            },
            "& .divider": divider,
            "& .project-icon svg path": {
              fill: iconColor,
            },
            "& .skills-section": {
              "& .button-link": skillsButton,
            },
            "& .blog-post-link, .all-tags-link": {
              fontWeight: 600,
              color: iconColor,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "& .next-post-link": {
              color: text.color,
              backgroundColor: "#ffffff",
              border: `2px solid ${iconColor}`,
              "&:hover": {
                backgroundColor: "rgba(94, 103, 111, 0.04)",
              },
              "&:active": {
                color: text.color,
              },
              "& .MuiSvgIcon-root": {
                color: iconColor,
              },
            },
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: themeBackgroundColors,
        },
      },
      MuiChip: {
        styleOverrides: {
          outlined: {
            border: button.border,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: header.backgroundColor,
          },
        },
      },
      MuiPagination: {
        defaultProps: {
          variant: "outlined",
          shape: "rounded",
          size: "large",
        },
      },
      MuiPaginationItem: {
        defaultProps: {
          slots: { previous: ArrowLeft, next: ArrowRight },
        },
        styleOverrides: {
          root: {
            paddingTop: "2px",
            borderColor: header.color,
            border: `2px solid ${header.color}`,
            "&.Mui-selected": {
              backgroundColor: header.color,
              color: "#ffffff",
              "&:hover": {
                backgroundColor: header.color,
                opacity: 0.9,
              },
            },
            "&:hover": {
              opacity: 0.6,
            },
          },
        },
      },
    },
  });

  return theme;
}
