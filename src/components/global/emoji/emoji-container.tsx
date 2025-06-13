import React from "react";

import Box from "@mui/material/Box";

import { EmojiProps } from "../../../types";

export function EmojiContainer({ name, children }: EmojiProps): JSX.Element {
  return (
    <Box
      component="span"
      className={`emoji ${name}`}
      role="img"
      aria-label={name}
    >
      {children}
    </Box>
  );
}
