import * as React from "react";

import { cleanup, render } from "@testing-library/react";
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

      const { getByText } = render(<Component />);

      const {
        post: {
          html,
          frontmatter: { title },
        },
      } = mockPost;

      expect(getByText(title)).toBeVisible();
      expect(getByText(parseHtmlString(html))).toBeVisible();

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

    const { getByText: getByTextOne, queryByText } = render(<ComponentOne />);

    expect(getByTextOne("next")).toBeVisible();
    expect(getByTextOne("next").parentElement).toHaveAttribute(
      "href",
      singleBlogOne.next?.fields.slug
    );
    expect(queryByText("prev")).toBeNull();

    cleanup();

    const { getByText: getByTextTwo } = render(<ComponentTwo />);

    expect(getByTextTwo("next")).toBeVisible();
    expect(getByTextTwo("prev")).toBeVisible();

    expect(getByTextOne("next").parentElement).toHaveAttribute(
      "href",
      singleBlogTwo.next?.fields.slug
    );
    expect(getByTextOne("prev").parentElement).toHaveAttribute(
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
