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
      background: "#ffffff",
      boxShadow: "1px 1px 1px black",
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
    minWidth: "320px",
    padding: "8px 1px",
  },
  "& .MuiChip-label": {
    paddingLeft: "25px",
    paddingTop: "2px",
    paddingRight: "25px",
    fontWeight: 900,
  },
  "& .MuiChip-root": {
    margin: "4px 3px 4px 4px",
    width: "31%",
  },
  "& .theme-button-container": {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
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
        sx={(theme) => ({
          [theme.breakpoints.down(355)]: {
            "& .MuiPopover-paper": {
              left: "0 !important",
            },
          },
          ...themePopoverStyles,
        })}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="theme-button-container">
          {Object.values(SiteTheme).map((themeOption) => (
            <ThemeSelectorButton
              key={`theme-button-${themeOption}`}
              themeOption={themeOption}
              selectedTheme={siteTheme}
              setSiteTheme={setSiteTheme}
              handleClose={handleClose}
            />
          ))}
        </Box>
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
