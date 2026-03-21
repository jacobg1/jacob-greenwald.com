import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import * as Gatsby from "gatsby";

import {
  getMockPageProps,
  mockMetadata,
  mockProjects,
  projectOne,
  projectTwo,
  updateProjectOrder,
  testProject,
  testMetadata,
} from "../../../__utils__";
import type { PageContent } from "../../types";
import ProjectsPage, { Head } from "../index";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const title = "Projects page title";
const testContent = "project page html";
const secondProjectLabel = "# 2";

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

    render(<ProjectsPage data={data} {...mockPageProps} />);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(testContent)).toBeVisible();
  });

  it("projects are rendered properly", () => {
    useStaticQuery.mockImplementation(() => mockProjects);

    render(<ProjectsPage data={data} {...mockPageProps} />);

    testProject(projectOne);

    fireEvent.click(screen.getByRole("tab", { name: secondProjectLabel }));
    testProject(projectTwo);
  });

  it("projects respect the order property", () => {
    useStaticQuery.mockImplementation(() => ({
      projects: {
        ...mockProjects.projects,
        edges: [
          updateProjectOrder(1, projectTwo),
          updateProjectOrder(2, projectOne),
        ],
      },
    }));

    render(<ProjectsPage data={data} {...mockPageProps} />);

    testProject(projectTwo);

    fireEvent.click(screen.getByRole("tab", { name: secondProjectLabel }));
    testProject(projectOne);
  });

  it("renders metadata properly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: { siteMetadata: mockMetadata },
    }));

    const { container } = render(<Head />, {
      container: document.head,
    });

    testMetadata(container, {
      title: mockMetadata.title,
      canonicalHref: mockMetadata.siteUrl,
    });
  });
});
