import type { Matcher, SelectorMatcherOptions } from "@testing-library/react";
import type { PageProps } from "gatsby";

export type TextMatcher = (
  id: Matcher,
  options?: SelectorMatcherOptions
) => HTMLElement;

export interface MockMetadata {
  title: string;
  canonicalHref: string;
}

export type MockParams = { test: string };

export type GetMockPageProps<T, C, S> = Omit<
  PageProps<T, C, unknown, S>,
  "data"
>;
