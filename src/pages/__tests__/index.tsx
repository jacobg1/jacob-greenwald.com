import * as React from "react";

import { fireEvent, render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockPageProps,
  mockMetadata,
  mockProjects,
  projectOne,
  projectTwo,
  parseHtmlString,
} from "../../../__utils__";
import type { ProjectNode, PageContent, TextMatcher } from "../../types";
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

function testProject(
  getByText: TextMatcher,
  getByTestId: TextMatcher,
  {
    node: {
      html,
      frontmatter: { title, iconName, app, repo },
    },
  }: ProjectNode
): void {
  expect(getByText(title)).toBeVisible();
  expect(getByText(parseHtmlString(html))).toBeVisible();
  expect(getByTestId(`${iconName}-icon`));
  expect(getByTestId(`${title}-app-button`)).toHaveAttribute("href", app);
  expect(getByTestId(`${title}-repo-button`)).toHaveAttribute("href", repo);
}

describe("projects page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders content and title properly", () => {
    useStaticQuery.mockImplementation(() => mockProjects);

    const { getByText, getByRole, getByTestId } = render(
      <ProjectsPage data={data} {...mockPageProps} />
    );

    expect(getByText(title)).toBeVisible();
    expect(getByText(testContent)).toBeVisible();

    testProject(getByText, getByTestId, projectOne);

    // Click on second project and verify visibility
    fireEvent.click(getByRole("tab", { name: "# 2" }));
    testProject(getByText, getByTestId, projectTwo);
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
