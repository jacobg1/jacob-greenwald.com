import { ThemeConfig } from "../theme-type";

const mainColor = "#a90000";
const mainBackground = "#cafaff";
const secondaryBackground = "#ffd8d8";

const buttonBackground = "#ffffff";
const buttonColor = "#000000";
const textColor = "#000000";

const borderPrimary = `2px solid ${mainColor}`;
const borderSecondary = `2px dashed ${mainColor}`;
const borderTertiary = `2px solid ${textColor}`;

export const cakeTheme: ThemeConfig = {
  text: {
    color: textColor,
  },
  mobileHeader: {
    backgroundColor: mainBackground,
  },
  header: {
    color: textColor,
    backgroundColor: secondaryBackground,
    borderBottom: borderPrimary,
  },
  footer: {
    backgroundColor: secondaryBackground,
    borderTop: borderPrimary,
  },
  main: {
    backgroundColor: mainBackground,
  },
  divider: {
    border: borderSecondary,
  },
  button: {
    border: borderTertiary,
    color: buttonColor,
    backgroundColor: buttonBackground,
    "&:hover": {
      border: borderTertiary,
    },
  },
  iconColor: mainColor,
  skillsButton: {
    color: buttonColor,
    backgroundColor: buttonBackground,
    "&:hover": {
      backgroundColor: secondaryBackground,
    },
  },
};

export const cakeThemeColor = secondaryBackground;
