import type { HtmlString } from "../src/types";

export function parseHtmlString(htmlString: HtmlString): string {
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(htmlString, "text/html");

  const textContent = parsedDoc.body.textContent;

  if (!textContent) return "";

  return textContent.trim();
}
