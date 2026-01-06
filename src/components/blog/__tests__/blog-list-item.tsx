import * as React from "react";

import { cleanup, render, screen } from "@testing-library/react";

import { postOne, postTwo, testBlogListItem } from "../../../../__utils__";
import { BlogListItem } from "../blog-list-item";

describe("blog list item component", () => {
  it("properly renders a blog list item", () => {
    [postOne, postTwo].forEach((post) => {
      render(<BlogListItem {...post} />);
      testBlogListItem(post);
      cleanup();
    });
  });

  it("doesn't show tags if none are available", () => {
    const postWithoutTags = {
      ...postOne,
      frontmatter: {
        ...postOne.frontmatter,
        tags: [],
      },
    };

    render(<BlogListItem {...postWithoutTags} />);
    expect(screen.queryAllByTestId(/tag-name/).length).toBe(0);
  });
});
