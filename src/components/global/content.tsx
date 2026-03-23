import React, { JSX } from "react";

import DOMPurify from "isomorphic-dompurify";

import type { HtmlString } from "../../types";

type ContentProps = {
  content: HtmlString;
  className?: string;
};

export const Content = ({ content, className }: ContentProps): JSX.Element => {
  return (
    <div
      className={className || "page-content"}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content, { ADD_ATTR: ["target"] }),
      }}
    />
  );
};
