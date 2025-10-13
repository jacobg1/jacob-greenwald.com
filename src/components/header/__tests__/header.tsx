import * as React from "react";

import {
  createHistory,
  createMemorySource,
  LocationProvider,
  navigate,
} from "@reach/router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Gatsby from "gatsby";

import { mockMetadata, mockNavLinks } from "../../../../__utils__";
import { useNavLinksQuery } from "../../../hooks/use-navlinks-query";
import { MobileHeader } from "../mobile-header";
import { SiteHeader } from "../site-header";

jest.mock("../../../hooks/use-navlinks-query", () => ({
  useNavLinksQuery: jest.fn(),
}));

const mockUseStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockQueryResults = {
  site: { siteMetadata: mockMetadata },
};

const mockHistory = createHistory(createMemorySource("/test"));

describe("header", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    (useNavLinksQuery as jest.Mock).mockImplementation(() => mockNavLinks);
    mockUseStaticQuery.mockImplementation(() => mockQueryResults);
  });

  it("SiteHeader renders properly", () => {
    const { getByText } = render(
      <LocationProvider history={mockHistory}>
        <SiteHeader />
      </LocationProvider>
    );

    expect(getByText("Software Engineer")).toBeInTheDocument();
  });

  it("SiteHeader mobile menu opens on click", async () => {
    const user = userEvent.setup();

    Object.defineProperty(window, "innerWidth", {
      value: {
        innerWidth: 200,
      },
    });

    const { getByLabelText, getByTestId } = render(
      <LocationProvider history={mockHistory}>
        <SiteHeader />
      </LocationProvider>
    );

    const menuIcon = getByLabelText("menu");
    await user.click(menuIcon);

    const closeMenuIcon = getByTestId("HighlightOffIcon");
    expect(closeMenuIcon).toBeInTheDocument();

    await user.click(closeMenuIcon);
    expect(menuIcon).toBeInTheDocument();
  });

  it("MobileHeader renders properly", () => {
    const mockClickHandler = jest.fn();

    render(
      <LocationProvider history={mockHistory}>
        {() => {
          React.useEffect(() => {
            navigate("/testing").catch(console.error);
          }, []);
          return (
            <MobileHeader
              navLinks={mockNavLinks}
              isOpen={true}
              onClick={mockClickHandler}
            />
          );
        }}
      </LocationProvider>
    );

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
