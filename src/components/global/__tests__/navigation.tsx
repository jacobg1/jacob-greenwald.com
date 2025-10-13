import * as React from "react";

import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import { cleanup, render } from "@testing-library/react";

import { mockNavLinks, normalizePath } from "../../../../__utils__";
import { SiteLinks } from "../navigation";

describe("navigation", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("proprely renders nav links", () => {
    for (const href of ["/", "/test", "/test/"]) {
      const mockHistory = createHistory(createMemorySource(href));

      const { getByText } = render(
        <LocationProvider history={mockHistory}>
          <SiteLinks navLinks={mockNavLinks} />
        </LocationProvider>
      );

      for (const { newTab, text, destination } of mockNavLinks) {
        const link = getByText(text);

        const normalizedPath = normalizePath(href);
        const expectedFontWeight = destination === normalizedPath ? 900 : 400;

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", destination);

        if (!newTab) {
          expect(link).toHaveStyle(`font-weight: ${expectedFontWeight}`);
          expect(link).not.toHaveAttribute("target", "_blank");
        } else {
          expect(link).toHaveAttribute("target", "_blank");
        }
      }

      cleanup();
    }
  });
});
