import type { HtmlString, ProjectNode, TextMatcher } from "../src/types";

function parseHtmlString(htmlString: HtmlString): string {
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(htmlString, "text/html");

  const textContent = parsedDoc.body.textContent;

  if (!textContent) return "";

  return textContent.trim();
}

export function updateProjectOrder(
  order: number,
  project: ProjectNode
): ProjectNode {
  return {
    node: {
      ...project.node,
      frontmatter: {
        ...project.node.frontmatter,
        order,
      },
    },
  };
}

export function testProject(
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
  expect(getByTestId(`${iconName}-icon`)).toBeVisible();
  expect(getByTestId(`${title}-app-button`)).toHaveAttribute("href", app);
  expect(getByTestId(`${title}-repo-button`)).toHaveAttribute("href", repo);
}
