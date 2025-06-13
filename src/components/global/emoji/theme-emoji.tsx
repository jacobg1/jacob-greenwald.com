import React, { useContext } from "react";

import { EmojiContainer } from "./emoji-container";
import { SiteThemeContext } from "../../../context/site-theme-context";
import { ThemeEmojiProps } from "../../../types";
import { getEmojisToShow } from "../../../utils";

export function ThemeEmoji({ emojis }: ThemeEmojiProps): JSX.Element | null {
  const { siteTheme } = useContext(SiteThemeContext);

  return (
    <>
      {getEmojisToShow(siteTheme, emojis).map(({ emoji, name }) => (
        <EmojiContainer key={name} name={name}>
          {emoji}
        </EmojiContainer>
      ))}
    </>
  );
}
