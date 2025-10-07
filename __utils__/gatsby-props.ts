import * as React from "react";

import type { WindowLocation } from "@reach/router";
import type { HeadProps, PageProps } from "gatsby";

const mockParams = {
  test: "true",
};

export function getMockPageProps<T, C = null, S = null>(
  data: T,
  context?: C | null,
  server?: S | null
): Omit<PageProps<T>, "data"> {
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
  };
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
