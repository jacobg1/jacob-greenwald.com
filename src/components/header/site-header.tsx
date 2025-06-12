import { default as React, useState } from "react";

import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import type { SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

import { DesktopHeader } from "./desktop-header";
import { HeaderEmoji } from "./header-emoji";
import { MobileHeader } from "./mobile-header";
import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import { NavLinkItem } from "../../types";

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
  "& .header-emojis": {
    fontSize: { xs: "18px", sm: "17px", md: "22px" },
  },
};

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
          Software Engineer <HeaderEmoji />
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
