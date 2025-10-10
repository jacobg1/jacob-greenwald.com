import * as React from "react";

import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from "@reach/router";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import { mockMetadata } from "../../../../__utils__";
import { useNavLinksQuery } from "../../../hooks/use-navlinks-query";
import { Page } from "../page";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockNavLinks = [
  {
    text: "Another Page",
    destination: "/another-page",
    newTab: false,
  },
];

const mockQueryResults = {
  site: { siteMetadata: mockMetadata },
};

describe("global page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    (useNavLinksQuery as jest.Mock).mockImplementation(() => mockNavLinks);
    useStaticQuery.mockImplementation(() => mockQueryResults);
  });

  it("renders properly", () => {
    const mockHistory = createHistory(createMemorySource("/"));

    const { queryByText } = render(
      <LocationProvider history={mockHistory}>
        <Page>
          <div>Test</div>
        </Page>
      </LocationProvider>
    );

    expect(queryByText("Test")).toBeVisible();
  });
});
