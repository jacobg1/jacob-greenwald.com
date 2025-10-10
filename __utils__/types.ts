import type { Matcher, SelectorMatcherOptions } from "@testing-library/react";
import type { HeadProps, PageProps } from "gatsby";

import type { SingleBlogProps } from "../src/types";

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

export type GetMockHeadProps<T, C, S> = Omit<HeadProps<T, C, S>, "data">;

export type PostNumWord = {
  [x: string]: {
    reg: string;
    up: string;
  };
};

export interface NextOrPrev {
  nextBlog: boolean;
  prevBlog: boolean;
}

export type NextOrPrevBlogCreate = Pick<SingleBlogProps, "next" | "previous">;
