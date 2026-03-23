import React, { JSX } from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { NextPostLink, PreviousPostLink } from "./post-links";
import type { NextAndPreviousPostProps } from "../../types";

const nextAndPreviousPostStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "800px",
  "& .next-post-link": {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    width: "100%",
    alignItems: "center",
    borderRadius: "4px",
    padding: "0 10px 2px",
  },
  "& .next-post-text": {
    padding: "3px 10px 0px 0",
  },
  "& .prev-post-text": {
    padding: "3px 0px 0px 10px",
  },
};

export const NextAndPreviousPost = ({
  previousPost,
  nextPost,
}: NextAndPreviousPostProps): JSX.Element => {
  return (
    <Box sx={nextAndPreviousPostStyles}>
      <PreviousPostLink post={previousPost} />
      <NextPostLink post={nextPost} />
    </Box>
  );
};
