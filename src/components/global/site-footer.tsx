import * as React from "react";

import { type SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import { SiteLinks } from "./navigation";
import { SiteEmail } from "./site-email";
import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import type { NavLinkItem } from "../../types";

const footerStyles: SxProps = {
  padding: { xs: "16px 17px", sm: 0 },
  "& .footer-container": {
    display: "flex",
    maxWidth: "700px",
    margin: "auto",
    height: { xs: "145px", sm: "75px" },
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { xs: "space-between", sm: "space-around" },
    alignItems: "center",
    a: {
      color: "black",
      fontSize: { sm: "18px" },
    },
  },
  "& .email": {
    textAlign: "center",
    fontSize: { sm: "20px" },
    padding: { xs: "10px 0 0", sm: "0 0 25px" },
  },
};

const Footer = styled("footer", {
  name: "MuiFooter",
  overridesResolver: (_, styles) => {
    return styles.root;
  },
})``;

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  return (
    <Footer sx={footerStyles}>
      <Box className="footer-container">
        <SiteLinks navLinks={navLinks} />
      </Box>
      <SiteEmail />
    </Footer>
  );
};
