import { default as React, useState } from "react";

import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import type { SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import { NavLinkItem, SiteTheme } from "../../types";
import { ThemeEmoji } from "../global/emoji";

const appBarStyles: SxProps = {
  padding: { xs: "17px", sm: "20px", md: "25px" },
  "& .desktop-header": {
    display: { xs: "none", sm: "flex" },
  },
  "& .menu-button": {
    display: { sm: "none" },
  },
  "& .MuiTypography-body1": {
    paddingTop: "5px",
  },
  "& .MuiIconButton-root": {
    color: "#000000",
  },
};

const emojiConfig = [
  {
    emoji: "🍕",
    name: "pizza",
    theme: { not: [SiteTheme.NEON, SiteTheme.CAKE] },
  },
  {
    emoji: "😎",
    name: "sunglasses-face",
    theme: { is: [SiteTheme.NEON] },
  },
  {
    emoji: "🍰",
    name: "shortcake",
    theme: { is: [SiteTheme.CAKE] },
  },
];

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  const [isOpen, setOpen] = useState(false);
  const clickHandler = (open: boolean): void => setOpen(open);

  return (
    <AppBar sx={appBarStyles} position="static">
      <Box display="flex" flexDirection="column">
        <Typography variant="h1">
          <Link className="title-link" to="/">
            Jacob Greenwald
          </Link>
        </Typography>
        <Typography component="span">
          Software Engineer <ThemeEmoji emojis={emojiConfig} />
        </Typography>
      </Box>
      <DesktopHeader navLinks={navLinks} />
      <MobileHeader
        navLinks={navLinks}
        isOpen={isOpen}
        onClick={(): void => clickHandler(false)}
      />
      <IconButton
        className="menu-button"
        size="large"
        edge="end"
        color="default"
        aria-label="menu"
        onClick={(): void => clickHandler(true)}
      >
        <DensityMediumSharpIcon fontSize="medium" />
      </IconButton>
    </AppBar>
  );
};
