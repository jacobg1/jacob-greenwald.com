import { ThemeConfig } from "../theme-type";

const mainColor = "#0000cc";
const secondaryBackground = "#e6e6e6";
const mainBackground = "#ffffff";

const border2px = `2px solid ${mainColor}`;
const border1px = `1px solid ${mainColor}`;

const buttonBackground = "#ffffff";
const buttonColor = "#000000";
const textColor = "#000000";

export const classicTheme: ThemeConfig = {
  text: {
    color: textColor,
  },
  mobileHeader: {
    backgroundColor: mainBackground,
  },
  header: {
    color: mainColor,
    backgroundColor: secondaryBackground,
    borderBottom: border2px,
  },
  footer: {
    backgroundColor: secondaryBackground,
    borderTop: border2px,
  },
  main: {
    backgroundColor: mainBackground,
  },
  divider: {
    border: border1px,
  },
  button: {
    border: border2px,
    color: buttonColor,
    backgroundColor: buttonBackground,
    "&:hover": {
      border: border1px,
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

export const classicThemeColor = secondaryBackground;
