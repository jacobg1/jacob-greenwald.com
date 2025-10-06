import * as React from "react";

import { render } from "@testing-library/react";

import NotFoundPage from "../404";

describe("404", () => {
  it("links back to the home page", () => {
    const { container } = render(<NotFoundPage />);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/");
  });
});
