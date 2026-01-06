import * as React from "react";

import { render, screen } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockHeadProps,
  getMockPageProps,
  mockSkills,
  mockMetadata,
  testMetadata,
} from "../../../__utils__";
import type { PageContentWithImage } from "../../types";
import AboutPage, { Head } from "../about";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const title = "About page title";
const testContent = "about page html";

const data = {
  content: {
    html: `<p>${testContent}</p>`,
    frontmatter: { title },
  },
};

const mockPageProps = getMockPageProps<PageContentWithImage>(data);
const mockHeadProps = getMockHeadProps("/about");

describe("about", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders content and title properly", () => {
    useStaticQuery.mockImplementation(() => ({
      markdownRemark: {
        frontmatter: { mySkills: mockSkills },
      },
    }));

    render(<AboutPage data={data} {...mockPageProps} />);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(testContent)).toBeVisible();
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(<Head data={data} {...mockHeadProps} />, {
      container: document.head,
    });

    testMetadata(container, {
      title,
      canonicalHref: `${mockMetadata.siteUrl}/about`,
    });
  });
});
