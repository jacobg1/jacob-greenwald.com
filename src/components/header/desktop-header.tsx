import React, { JSX } from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { NavLinkList } from "../../types";
import { SiteLinks } from "../global/navigation";

const desktopHeaderStyles: SxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "60%",
  maxWidth: { xs: "500px", md: "600px" },
  alignSelf: "center",
  a: {
    color: "black",
    fontSize: "17px",
  },
};

export const DesktopHeader = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <Box sx={desktopHeaderStyles} className="desktop-header">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
