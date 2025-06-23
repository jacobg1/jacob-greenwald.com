import React from "react";

import type { SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";

import { CopyToClipboard } from "./copy-to-clipboard";
import { useMetadataQuery } from "../../hooks/use-metadata-query";
import type { SiteMetadata, SiteEmailProps } from "../../types";

const emailStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export function SiteEmail({
  isMobileHeader = false,
}: SiteEmailProps): JSX.Element {
  const { email } = useMetadataQuery<SiteMetadata>();
  return (
    <Typography sx={emailStyles} className="email" variant="body1">
      {email}
      <CopyToClipboard isMobileHeader={isMobileHeader} value={email} />
    </Typography>
  );
}
