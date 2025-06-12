import React, { useContext } from "react";

import { EmojiContainer } from "./emoji-container";
import { SiteThemeContext } from "../../../context/site-theme-context";
import { EmojiProps } from "../../../types";
import { isWackyTheme } from "../../../utils";

export function RegularEmoji({
  name,
  children,
}: EmojiProps): JSX.Element | null {
  const { siteTheme } = useContext(SiteThemeContext);

  if (isWackyTheme(siteTheme)) return null;

  return <EmojiContainer name={name}>{children}</EmojiContainer>;
}
