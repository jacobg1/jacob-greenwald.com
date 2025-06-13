import * as React from "react";

import type { SxProps } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { EmojiContainer } from "./emoji";

interface TitleWithDivider {
  title: string;
  emojiConfig?: {
    emoji: string;
    name: string;
  };
}

const titleStyles: SxProps = {
  fontSize: { xs: "30px", md: "35px" },
  paddingBottom: "5px",
};

export function TitleWithDivider({
  title,
  emojiConfig,
}: TitleWithDivider): JSX.Element {
  return (
    <>
      <Typography sx={titleStyles} variant="h2">
        {title}
        {emojiConfig ? (
          <EmojiContainer name={emojiConfig.name}>
            {emojiConfig.emoji}
          </EmojiContainer>
        ) : null}
      </Typography>
      <Divider style={{ maxWidth: "800px" }} className="divider" />
    </>
  );
}
