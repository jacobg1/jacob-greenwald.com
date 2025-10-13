import * as React from "react";

import { cleanup, render } from "@testing-library/react";

import { TagsList } from "../tags-list";

describe("tags list", () => {
  it("renders tags", () => {
    const { container } = render(<TagsList tags={["tag one", "tag two"]} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it("only shows tags if available", () => {
    const { container } = render(<TagsList tags={[]} />);
    expect(container).toBeEmptyDOMElement();

    cleanup();

    const { container: containerTwo } = render(
      <TagsList tags={undefined as unknown as string[]} />
    );
    expect(containerTwo).toBeEmptyDOMElement();
  });
});
