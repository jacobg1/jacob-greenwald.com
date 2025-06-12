import React from "react";

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
  {
    emoji: "🍩",
    name: "doughnut",
    isWacky: true,
  },
];

export function HeaderEmoji(): JSX.Element {
  return (
    <Box component="span" className="header-emojis">
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
