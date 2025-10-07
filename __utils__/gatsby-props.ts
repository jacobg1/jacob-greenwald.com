import * as React from "react";

import type { WindowLocation } from "@reach/router";
import type { PageProps } from "gatsby";

import { type Skill, SkillsEnum } from "../src/types";

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

// TODO - better location for this?
export const mockSkills: Skill[] = [
  { text: "test skill", type: SkillsEnum.BACKEND, website: "test-site" },
  { text: "test skill2", type: SkillsEnum.FRONTEND, website: "test2-site" },
];
