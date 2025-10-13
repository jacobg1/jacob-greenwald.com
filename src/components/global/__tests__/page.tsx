import * as React from "react";

import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from "@reach/router";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import { mockMetadata, mockNavLinks } from "../../../../__utils__";
import { useNavLinksQuery } from "../../../hooks/use-navlinks-query";
import { Page } from "../page";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockQueryResults = {
  site: { siteMetadata: mockMetadata },
};

jest.mock("../../../hooks/use-navlinks-query", () => ({
  useNavLinksQuery: jest.fn(),
}));

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
    const content = "Page Content";

    const { queryByText } = render(
      <LocationProvider history={mockHistory}>
        <Page>
          <div>{content}</div>
        </Page>
      </LocationProvider>
    );

    expect(queryByText(content)).toBeVisible();
  });
});
