import * as React from "react";

import { render } from "@testing-library/react";

import { postOne, postTwo } from "../../../../__utils__";
import { NextPostLink, PreviousPostLink } from "../post-links";

describe("post links", () => {
  it("renders the next post link", () => {
    const { container } = render(<NextPostLink post={postTwo} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it("the next post link is null if no next post is available", () => {
    const { container } = render(<NextPostLink post={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the previous post link", () => {
    const { queryByText } = render(<PreviousPostLink post={postOne} />);
    expect(queryByText("prev")).not.toBeNull();
  });

  it("the prev post link is null if no prev post is available", () => {
    const { queryByText } = render(<PreviousPostLink post={null} />);
    expect(queryByText("prev")).toBeNull();
  });
});
