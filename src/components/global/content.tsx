import React, { JSX } from "react";

import type { HtmlString } from "../../types";
import { contentSanitizer, allowedContentAttributes } from "../../utils";

type ContentProps = {
  content: HtmlString;
  className?: string;
};

export const Content = ({ content, className }: ContentProps): JSX.Element => {
  return (
    <div
      className={className || "page-content"}
      dangerouslySetInnerHTML={{
        __html: contentSanitizer(content, {
          allowedAttributes: allowedContentAttributes(),
        }),
      }}
    />
  );
};
