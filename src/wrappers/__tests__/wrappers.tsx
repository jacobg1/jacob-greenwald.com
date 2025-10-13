import { LocationProvider } from "@reach/router";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  mockMetadata,
  mockNavLinks,
  PageWrappedElement,
  RootWrappedElement,
} from "../../../__utils__";
import * as LocalStorageHook from "../../hooks/use-local-storage";
import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import { wrapPageElement } from "../wrap-page-element";
import { wrapRootElement } from "../wrap-root-element";

jest.mock("../../hooks/use-navlinks-query", () => ({
  useNavLinksQuery: jest.fn(),
}));

const mockUseStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockMetadataResponse = {
  site: { siteMetadata: mockMetadata },
};

const testText = "Test text";

describe("wrappers", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    (useNavLinksQuery as jest.Mock).mockImplementation(() => mockNavLinks);
    mockUseStaticQuery.mockImplementation(() => mockMetadataResponse);
  });

  it("wrapRootElement properly renders component", () => {
    const { getByText } = render(RootWrappedElement(testText, wrapRootElement));
    expect(getByText(testText)).toBeInTheDocument();
  });

  it("wrapRootElement renders default container if theme is unavailable", () => {
    const expectedClass = "MuiBox-root";

    jest
      .spyOn(LocalStorageHook, "useLocalStorage")
      .mockImplementation(() => ["", jest.fn()]);

    const { getByText } = render(RootWrappedElement(testText, wrapRootElement));

    const element = getByText(testText);
    expect(element).toBeInTheDocument();
    expect(element.parentElement).toHaveClass(expectedClass);
  });

  it("wrapPageElement renders properly", () => {
    const { getByText } = render(
      PageWrappedElement(testText, wrapPageElement),
      { wrapper: LocationProvider }
    );
    expect(getByText(testText)).toBeInTheDocument();
  });
});
