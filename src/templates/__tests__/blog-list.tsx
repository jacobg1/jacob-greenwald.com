import * as React from "react";

import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockHeadProps,
  getMockPageProps,
  mockBlogList,
  mockMetadata,
  testMetadata,
} from "../../../__utils__";
import type { BlogsListProps, BlogListContext } from "../../types";
import BlogListPage, { Head } from "../blog-list";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const title = "Blog Posts";

const mockPageContext = {
  totalPages: 2,
  currentPage: 1,
};

const mockPageProps = getMockPageProps<BlogsListProps, BlogListContext>(
  mockBlogList,
  mockPageContext
);

const mockHeadProps = getMockHeadProps("/blog");

const data = {
  ...mockBlogList,
  pageContext: mockPageContext,
};

describe("blog list template", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders title and blog list", () => {
    const { getByText, queryAllByTestId } = render(
      <BlogListPage data={data} {...mockPageProps} />
    );
    expect(getByText(title)).toBeVisible();

    const {
      postsData: { nodes: posts },
    } = data;

    for (const {
      fields: { slug },
      frontmatter: { title, date, description, tags },
    } of posts) {
      expect(getByText(title)).toHaveAttribute("href", slug);
      expect(getByText(date)).toBeVisible();
      expect(getByText(description)).toBeVisible();

      tags.forEach((tag) => {
        const testId = `tag-name-${tag}`;
        const tagHref = `/tags/${tag.toLocaleLowerCase()}/`;
        const tagLinks = queryAllByTestId(testId);

        tagLinks.forEach((tagLink) => {
          expect(tagLink).toHaveAttribute("href", tagHref);
          expect(tagLink).toHaveTextContent(tag);
        });
      });
    }
  });

  it("renders pagination properly", () => {
    const { getByLabelText, getByTestId } = render(
      <BlogListPage data={data} {...mockPageProps} />
    );

    [1, 2].forEach((num) => {
      const exp = new RegExp(`page ${num}`);
      expect(getByLabelText(exp)).toBeEnabled();
    });

    expect(getByTestId("NavigateBeforeIcon").parentElement).toBeDisabled();
    expect(getByTestId("NavigateNextIcon").parentElement).toBeEnabled();
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(<Head data={data} {...mockHeadProps} />, {
      container: document.head,
    });

    testMetadata(container, {
      title: "Blog",
      canonicalHref: `${mockMetadata.siteUrl}/blog`,
    });
  });
});
