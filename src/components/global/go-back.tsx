import React, { JSX } from "react";

import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { Link as InternalLink } from "gatsby";

const goBackStyles: SxProps = {
  "& .back": {
    display: "inline-block",
    marginBottom: "10px",
  },
};

export const GoBack = ({ page }: { page: string }): JSX.Element => {
  return (
    <Box sx={goBackStyles}>
      <InternalLink className="back" to={page}>
        <KeyboardReturnOutlinedIcon fontSize="large" />
      </InternalLink>
    </Box>
  );
};
