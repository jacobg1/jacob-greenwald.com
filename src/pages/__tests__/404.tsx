import * as React from "react";

import { render } from "@testing-library/react";

import NotFoundPage from "../404";

describe("404", () => {
  it("contains the appropriate text", () => {
    const { getByText } = render(<NotFoundPage />);

    getByText("Not found");
  });
});
