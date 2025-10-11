import type {
  TextMatcher,
  MockMetadata,
  NextOrPrev,
  PostNumWord,
  NextOrPrevBlogCreate,
  QueryMatcher,
} from "./test-types";
import type {
  BlogListNode,
  HtmlString,
  ProjectNode,
  SingleBlogProps,
  SiteTheme,
} from "../src/types";

export function parseHtmlString(htmlString: HtmlString): string {
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

export function testMetadata(
  container: HTMLHeadElement,
  { title, canonicalHref }: MockMetadata
): void {
  const metaTitle = container.querySelector("title");
  expect(metaTitle?.textContent).toBe(title);

  const canonical = container.querySelector('[rel="canonical"]');
  expect(canonical).toHaveAttribute("href", canonicalHref);

  // TODO - test more meta tags?
}

export function testBlogListItem(
  getByText: TextMatcher,
  queryAllByTestId: QueryMatcher,
  {
    fields: { slug },
    frontmatter: { title, date, description, tags },
  }: BlogListNode
): void {
  expect(getByText(title)).toHaveAttribute("href", slug);
  expect(getByText(date)).toBeVisible();
  expect(getByText(description)).toBeVisible();

  tags.forEach((tag) => {
    const testId = `tag-name-${tag}`;
    const tagHref = `/tags/${tag.toLocaleLowerCase()}/`;
    const tagLinks = queryAllByTestId(testId);

    if (!tagLinks?.length) {
      throw new Error("Failed to find tag links");
    }

    tagLinks.forEach((tagLink) => {
      expect(tagLink).toHaveAttribute("href", tagHref);
      expect(tagLink).toHaveTextContent(tag);
    });
  });
}

export function testThemeSelector(
  selectedTheme: SiteTheme,
  mockSetState: jest.Mock,
  mockClose: jest.Mock
): void {
  expect(mockSetState).toHaveBeenCalledTimes(1);
  expect(mockClose).toHaveBeenCalledTimes(1);

  expect(mockSetState).toHaveBeenCalledWith(selectedTheme);
  expect(mockClose).toHaveBeenCalled();
}

const postNumWord: PostNumWord = {
  "1": { reg: "one", up: "One" },
  "2": { reg: "two", up: "Two" },
  "3": { reg: "three", up: "Three" },
};

function createNextOrPrevBlog(
  key: string,
  post: PostNumWord[number],
  show: boolean
): NextOrPrevBlogCreate {
  const postData = show
    ? {
        fields: {
          slug: `/blog/post-${post.reg}/`,
        },
        frontmatter: {
          title: `Post ${post.up}`,
        },
      }
    : null;

  return {
    [key]: postData,
  } as NextOrPrevBlogCreate;
}

export function createSinglePost(
  blogNum: number,
  { nextBlog, prevBlog }: NextOrPrev
): SingleBlogProps {
  const post = postNumWord[blogNum];
  const next = postNumWord[blogNum + 1];
  const prev = postNumWord[blogNum - 1];

  return {
    post: {
      html: `<p>post ${post.reg} html</p>`,
      fields: {
        slug: `/blog/post-${post.reg}/`,
      },
      frontmatter: {
        title: `Post ${post.up}`,
        description: `Post ${post.reg} description`,
        date: `October 2${blogNum}, 2024`,
      },
    },
    ...createNextOrPrevBlog("next", next, nextBlog),
    ...createNextOrPrevBlog("previous", prev, prevBlog),
  };
}

export async function getClipboardValue(nav: Navigator): Promise<string> {
  try {
    return await nav.clipboard.readText();
  } catch {
    return "";
  }
}
