import type { Matcher, SelectorMatcherOptions } from "@testing-library/react";

export type TextMatcher = (
  id: Matcher,
  options?: SelectorMatcherOptions
) => HTMLElement;

export interface MockMetadata {
  title: string;
  canonicalHref: string;
}
