import { default as React, useEffect } from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import { globalHistory } from "@reach/router";

import { MobileHeaderProps } from "../../types";
import { historyListener, styleOverridesResolver } from "../../utils";
import { SiteLinks } from "../global/navigation";
import { SiteEmail } from "../global/site-email";

const mobileHeaderStyles: SxProps = {
  "& .link-holder": {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "30%",
  },
  "& .close-button": {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
};

const MobileHeaderContainer = styled("div", {
  name: "MuiMobileHeaderContainer",
  overridesResolver: styleOverridesResolver,
})``;

export const MobileHeader = ({
  navLinks,
  isOpen,
  onClick,
}: MobileHeaderProps): JSX.Element => {
  useEffect(() => {
    return globalHistory.listen(historyListener(onClick));
  }, [onClick]);
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClick}>
      <MobileHeaderContainer sx={mobileHeaderStyles}>
        <HighlightOffIcon className="close-button" onClick={onClick} />
        <Box className="link-holder">
          <SiteLinks navLinks={navLinks} />
        </Box>
        <SiteEmail isMobileHeader />
      </MobileHeaderContainer>
    </Drawer>
  );
};
