import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockHeadProps,
  getMockPageProps,
  mockBlogList,
  mockMetadata,
  testBlogListItem,
  testMetadata,
} from "../../../__utils__";
import type { BlogsListProps, BlogListContext } from "../../types";
import BlogListPage, { Head } from "../blog-list";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
const navigate = jest.spyOn(Gatsby, "navigate");

const title = "Blog Posts";

const mockPageContext = {
  totalPages: 3,
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
    render(<BlogListPage data={data} {...mockPageProps} />);
    expect(screen.getByText(title)).toBeVisible();

    const {
      postsData: { nodes: posts },
    } = data;

    for (const post of posts) {
      testBlogListItem(post);
    }
  });

  it("renders pagination properly", () => {
    render(<BlogListPage data={data} {...mockPageProps} />);

    [1, 2, 3].forEach((num) => {
      const exp = new RegExp(`page ${num}`);
      expect(screen.getByLabelText(exp)).toBeEnabled();
    });

    expect(
      screen.getByTestId("NavigateBeforeIcon").parentElement
    ).toBeDisabled();
    expect(screen.getByTestId("NavigateNextIcon").parentElement).toBeEnabled();
  });

  it("can change pages", () => {
    render(<BlogListPage data={data} {...mockPageProps} />);

    [1, 2, 3].forEach((num) => {
      const exp = new RegExp(`page ${num}`);
      fireEvent.click(screen.getByLabelText(exp));

      const href = num === 1 ? "/blog" : `/blog/${num}`;
      expect(navigate).toHaveBeenNthCalledWith(num, href);
    });
  });

  it("pagination doesn't show if only one page of posts", () => {
    const pageContext = { totalPages: 1, currentPage: 1 };
    const pageProps = getMockPageProps<BlogsListProps, BlogListContext>(
      mockBlogList,
      pageContext
    );

    const pageData = {
      ...mockBlogList,
      pageContext,
    };

    render(<BlogListPage data={pageData} {...pageProps} />);
    expect(screen.queryByLabelText(new RegExp(`page 1`))).toBeNull();
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
