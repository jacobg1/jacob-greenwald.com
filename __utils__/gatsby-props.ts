import * as React from "react";

import type { WindowLocation } from "@reach/router";
import type { HeadProps } from "gatsby";

import type { MockParams, GetMockPageProps } from "./types";

const mockParams = {
  test: "true",
};

export function getMockPageProps<T, C = MockParams, S = MockParams>(
  data: T,
  context?: C,
  server?: S
): GetMockPageProps<T, C, S> {
  const pageContext = context || mockParams;
  const serverData = server || mockParams;

  return {
    path: "/",
    uri: "/",
    location: window.location as WindowLocation,
    children: undefined,
    params: mockParams,
    pageResources: {
      component: new React.Component(mockParams),
      json: { data, pageContext },
      page: {
        componentChunkName: "string",
        path: "string",
        webpackCompilationHash: "string",
      },
    },
    pageContext,
    serverData,
  } as GetMockPageProps<T, C, S>;
}

export function getMockHeadProps<C = null, S = null>(
  pathname: string,
  context?: C | null,
  server?: S | null
): Omit<HeadProps, "data"> {
  const pageContext = context || mockParams;
  const serverData = server || mockParams;

  return {
    location: { pathname },
    params: mockParams,
    pageContext,
    serverData,
  };
}
