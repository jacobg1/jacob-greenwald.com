import React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { RegularEmoji, WackyEmoji } from "../global/emoji";

const emojis = [
  {
    emoji: "🍕",
    name: "pizza",
    isWacky: false,
  },
  {
    emoji: "😎",
    name: "sunglasses-face",
    isWacky: true,
  },
];

const headerEmojiStyles: SxProps = {
  fontSize: { xs: "20px", sm: "17px", md: "22px" },
};

export function HeaderEmoji(): JSX.Element {
  return (
    <Box component="span" sx={headerEmojiStyles}>
      {emojis.map(({ emoji, name, isWacky }) => {
        const EmojiComponent = isWacky ? WackyEmoji : RegularEmoji;
        return (
          <EmojiComponent key={`emoji-${name}`} name={name}>
            {emoji}
          </EmojiComponent>
        );
      })}
    </Box>
  );
}
