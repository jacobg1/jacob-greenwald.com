import * as React from "react";

import { render, screen } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockHeadProps,
  getMockPageProps,
  mockTagPagePosts,
  testMetadata,
  mockMetadata,
} from "../../../__utils__";
import type { SingleTagContext, SingleTagPageProps } from "../../types";
import SingleTag, { Head } from "../single-tag";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const testTag = "Test Tag";
const testTagSlug = `/tags/test-tag`;
const tagTitle = `Tag - ${testTag}`;
const mockPageContext = { tag: testTag };

const mockPageProps = getMockPageProps<SingleTagPageProps, SingleTagContext>(
  mockTagPagePosts,
  mockPageContext
);

const mockHeadProps = getMockHeadProps<SingleTagContext>(
  testTagSlug,
  mockPageContext
);

describe("single tag", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders blog list and title properly", () => {
    render(<SingleTag data={mockTagPagePosts} {...mockPageProps} />);

    const {
      allMarkdownRemark: { edges: posts },
    } = mockTagPagePosts;

    expect(screen.getByText(tagTitle)).toBeVisible();

    posts.forEach(
      ({
        node: {
          fields: { slug },
          frontmatter: { title, date, description },
        },
      }) => {
        expect(screen.getByText(title)).toHaveAttribute("href", slug);
        expect(screen.getByText(date)).toBeVisible();
        expect(screen.getByText(description)).toBeVisible();
      }
    );
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(
      <Head data={mockTagPagePosts} {...mockHeadProps} />,
      {
        container: document.head,
      }
    );

    const { siteUrl } = mockMetadata;

    testMetadata(container, {
      title: tagTitle,
      canonicalHref: `${siteUrl}${testTagSlug}`,
    });
  });
});
