import * as React from "react";

import { cleanup, render, screen } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockPageProps,
  getMockHeadProps,
  mockMetadata,
  mockSingleBlogPosts,
  parseHtmlString,
  testMetadata,
} from "../../../__utils__";
import { SingleBlogProps } from "../../types";
import SingleBlog, { Head } from "../single-blog";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const { singleBlogOne, singleBlogTwo } = mockSingleBlogPosts;

const mockHeadProps = getMockHeadProps(singleBlogOne.post.fields.slug);

describe("blog list template", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders blog content properly", () => {
    Object.values(mockSingleBlogPosts).forEach((mockPost) => {
      const mockPageProps = getMockPageProps<SingleBlogProps>(mockPost);
      const Component = (): JSX.Element => (
        <SingleBlog data={mockPost} {...mockPageProps} />
      );

      render(<Component />);

      const {
        post: {
          html,
          frontmatter: { title },
        },
      } = mockPost;

      expect(screen.getByText(title)).toBeVisible();
      expect(screen.getByText(parseHtmlString(html))).toBeVisible();

      cleanup();
    });
  });

  it("next and previous buttons render properly", () => {
    const pagePropsOne = getMockPageProps<SingleBlogProps>(singleBlogOne);
    const pagePropsTwo = getMockPageProps<SingleBlogProps>(singleBlogTwo);
    const ComponentOne = (): JSX.Element => (
      <SingleBlog data={singleBlogOne} {...pagePropsOne} />
    );
    const ComponentTwo = (): JSX.Element => (
      <SingleBlog data={singleBlogTwo} {...pagePropsTwo} />
    );

    render(<ComponentOne />);

    expect(screen.getByText("next")).toBeVisible();
    expect(screen.getByText("next").parentElement).toHaveAttribute(
      "href",
      singleBlogOne.next?.fields.slug
    );
    expect(screen.queryByText("prev")).toBeNull();

    cleanup();

    render(<ComponentTwo />);

    expect(screen.getByText("next")).toBeVisible();
    expect(screen.getByText("prev")).toBeVisible();

    expect(screen.getByText("next").parentElement).toHaveAttribute(
      "href",
      singleBlogTwo.next?.fields.slug
    );
    expect(screen.getByText("prev").parentElement).toHaveAttribute(
      "href",
      singleBlogTwo.previous?.fields.slug
    );
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(
      <Head data={singleBlogOne} {...mockHeadProps} />,
      {
        container: document.head,
      }
    );

    const {
      post: {
        fields: { slug },
        frontmatter: { title },
      },
    } = singleBlogOne;

    testMetadata(container, {
      title,
      canonicalHref: `${mockMetadata.siteUrl}${slug}`,
    });
  });
});
