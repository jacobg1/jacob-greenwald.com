import * as React from "react";

import { fireEvent, render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockPageProps,
  mockMetadata,
  mockProjects,
  projectOne,
  projectOneContent,
  projectTwo,
} from "../../../__utils__";
import type { PageContent } from "../../types";
import ProjectsPage, { Head } from "../index";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const title = "Projects page title";
const testContent = "project page html";

const data = {
  content: {
    html: `<p>${testContent}</p>`,
    frontmatter: { title },
  },
};

const mockPageProps = getMockPageProps<PageContent>(data);

describe("projects page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders content and title properly", () => {
    useStaticQuery.mockImplementation(() => mockProjects);

    const { getByText } = render(
      <ProjectsPage data={data} {...mockPageProps} />
    );

    expect(getByText(title)).toBeVisible();
    expect(getByText(testContent)).toBeVisible();
    expect(getByText(projectOneContent)).toBeVisible();

    // TODO - test rest of project properties?
    expect(getByText(projectOne.node.frontmatter.title)).toBeVisible();

    // TODO - add data test ids?
    fireEvent.click(getByText("# 2"));
    expect(getByText(projectTwo.node.frontmatter.title)).toBeVisible();
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(<Head />, {
      container: document.head,
    });

    const metaTitle = container.querySelector("title");
    expect(metaTitle?.textContent).toBe(mockMetadata.title);

    const canonical = container.querySelector('[rel="canonical"]');
    expect(canonical).toHaveAttribute("href", mockMetadata.siteUrl);
  });
});
