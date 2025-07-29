import type { ThemeConfig } from "../../types";

const mainColor = "#f00";
const mainBackground = "#00f3ff";
const secondaryBackground = "#00ff9f";

const border2px = `2px solid ${mainColor}`;
const border1px = `1px solid ${mainColor}`;

const buttonBackground = "#ffffff";
const buttonColor = "#000000";
const textColor = "#000000";

export const neonTheme: ThemeConfig = {
  themeColor: secondaryBackground,
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
      border: border2px,
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
