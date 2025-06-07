import * as React from "react";

import Chip from "@mui/material/Chip";

import { ThemeSelectorButtonProps } from "../../types";
import { SITE_THEME_KEY } from "../../types/enum";
import { capitalizeWord } from "../../utils";

export function ThemeSelectorButton({
  themeOption,
  selectedTheme,
  setSiteTheme,
  handleClose,
}: ThemeSelectorButtonProps): JSX.Element {
  const isActive = selectedTheme === themeOption;
  const label = capitalizeWord(themeOption as string);

  return (
    <Chip
      className={`${label.toLocaleLowerCase()}-theme`}
      sx={{
        ...(isActive && {
          border: "2px solid",
        }),
      }}
      onClick={() => {
        setSiteTheme(themeOption);
        localStorage?.setItem(SITE_THEME_KEY, themeOption);
        handleClose();
      }}
      label={label}
    />
  );
}
