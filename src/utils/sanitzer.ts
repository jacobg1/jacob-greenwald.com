import sanitizeHtml, { defaults, type IDefaults } from "sanitize-html";

import type { HtmlString } from "../types";

export function contentSanitizer(
  content: HtmlString,
  options: Partial<IDefaults> | IDefaults = defaults
): TrustedHTML {
  return sanitizeHtml(content, {
    ...defaults,
    allowedAttributes: {
      ...defaults.allowedAttributes,
      ...options.allowedAttributes,
    },
  });
}

export function allowedContentAttributes(): Record<string, string[]> {
  const allowedAttributes = ["class", "data-language"];

  return ["div", "pre", "code", "span"].reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: allowedAttributes,
    }),
    {}
  );
}
