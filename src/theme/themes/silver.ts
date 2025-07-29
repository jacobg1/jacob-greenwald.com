import { ThemeConfig } from "../theme-type";

const mainColor = "#014b95";
const secondaryBackground = "#e7e7e7";
const mainBackground = "#f5f5f5";

const border2px = `2px solid ${mainColor}`;
const border1px = `1px solid ${mainColor}`;

const buttonBackground = "#ffffff";
const buttonColor = "#000000";
const textColor = "#000000";

export const silverTheme: ThemeConfig = {
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
