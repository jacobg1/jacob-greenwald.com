import * as React from "react";

import { cleanup, render } from "@testing-library/react";

import { postOne, postTwo, testBlogListItem } from "../../../../__utils__";
import { BlogListItem } from "../blog-list-item";

describe("blog list item component", () => {
  it("properly renders a blog list item", () => {
    [postOne, postTwo].forEach((post) => {
      const { getByText, queryAllByTestId } = render(
        <BlogListItem {...post} />
      );
      testBlogListItem(getByText, queryAllByTestId, post);
      cleanup();
    });
  });

  it("doesn't show tags if none available", () => {
    const postWithoutTags = {
      ...postOne,
      frontmatter: {
        ...postOne.frontmatter,
        tags: [],
      },
    };

    const { queryAllByTestId } = render(<BlogListItem {...postWithoutTags} />);

    expect(queryAllByTestId(/tag-name/).length).toEqual(0);
  });
});
