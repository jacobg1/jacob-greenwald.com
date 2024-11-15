import React, { useContext, useState, MouseEvent } from "react";

import ContrastIcon from "@mui/icons-material/Contrast";
import { type SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";

import { ThemeSelectorButton } from "./theme-selector-button";
import { SiteThemeContext } from "../../context/site-theme-context";
import { SiteTheme } from "../../types/enum";

const themeSelectorStyles: SxProps = {
  marginBottom: "20px",
  "& .select-theme-button": {
    marginBottom: 0,
    lineHeight: 0,
    textTransform: "none",
    fontWeight: 900,
    "&:hover": {
      borderWidth: "2px",
    },
    "& .MuiButton-icon": {
      paddingBottom: "2px",
    },
  },
};

const themePopoverStyles: SxProps = {
  "& .MuiPopover-paper": {
    width: "100%",
    maxWidth: "330px",
    padding: "15px 5px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  "& .MuiChip-label": {
    paddingLeft: "25px",
    paddingTop: "2px",
    paddingRight: "25px",
    fontWeight: 900,
  },
  "& .MuiChip-root": {
    width: "31%",
  },
};

export function ThemeSelector(): JSX.Element {
  const { siteTheme, setSiteTheme } = useContext(SiteThemeContext);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "theme-selector" : undefined;

  return (
    <Box sx={themeSelectorStyles}>
      <Popover
        id={id}
        open={open}
        sx={themePopoverStyles}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ThemeSelectorButton
          label="Silver"
          themeOption={SiteTheme.SILVER}
          selectedTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          handleClose={handleClose}
        />
        <ThemeSelectorButton
          label="Gold"
          themeOption={SiteTheme.GOLD}
          selectedTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          handleClose={handleClose}
        />
        <ThemeSelectorButton
          label="Bronze"
          themeOption={SiteTheme.BRONZE}
          selectedTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          handleClose={handleClose}
        />
      </Popover>
      <Button
        className="select-theme-button"
        onClick={handleClick}
        aria-describedby={id}
        startIcon={<ContrastIcon />}
      >
        Change Theme
      </Button>
    </Box>
  );
}
