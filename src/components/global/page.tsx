import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";

import { SiteFooter } from "./site-footer";
import { ThemeSelector } from "./theme-selector";
import { styleOverridesResolver } from "../../utils";
import { SiteHeader } from "../header/site-header";

type PageProps = {
  children: React.ReactNode;
};

export const PageContainer = styled("div", {
  name: "MuiPageContainer",
  overridesResolver: styleOverridesResolver,
})``;

export const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <PageContainer>
      <CssBaseline />
      <SiteHeader />
      <Box component="main">
        <ThemeSelector />
        {children}
      </Box>
      <SiteFooter />
    </PageContainer>
  );
};
