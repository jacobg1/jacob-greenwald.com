import * as React from "react";

import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockPageProps,
  mockMetadata,
  testMetadata,
  getMockHeadProps,
  mockTags,
} from "../../../__utils__";
import type { TagsPageProps } from "../../types";
import { createTagPageLink, pluralWord } from "../../utils";
import TagsPage, { Head } from "../tags";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockPageProps = getMockPageProps<TagsPageProps>(mockTags);
const mockHeadProps = getMockHeadProps("/tags");

const title = "All Tags";

describe("tags page", () => {
  it("renders title and tags properly", () => {
    useStaticQuery.mockImplementation(() => mockTags);

    const { getByText, getByTestId } = render(
      <TagsPage data={mockTags} {...mockPageProps} />
    );

    expect(getByText(title)).toBeVisible();

    const {
      tagsData: { group: tags },
    } = mockTags;

    for (const { fieldValue, totalCount } of tags) {
      const totalCountText = `${totalCount} ${pluralWord(totalCount, "post")}`;
      expect(getByText(totalCountText)).toBeVisible();
      expect(getByText(fieldValue)).toBeVisible();

      const link = getByTestId(`${fieldValue}-tag-link`);
      expect(link).toHaveAttribute("href", createTagPageLink(fieldValue));
    }
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(<Head data={mockTags} {...mockHeadProps} />, {
      container: document.head,
    });

    testMetadata(container, {
      title,
      canonicalHref: `${mockMetadata.siteUrl}/tags`,
    });
  });
});
