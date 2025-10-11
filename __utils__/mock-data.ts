import { createSinglePost } from "./general-utils";
import {
  ProjectIconName,
  SiteTheme,
  SkillsEnum,
  type EmojiConfig,
  type ProjectsListContent,
  type SiteMetadata,
  type Skill,
  type TagsPageProps,
} from "../src/types";

export const mockSkills: Skill[] = [
  { text: "test skill", type: SkillsEnum.BACKEND, website: "test-site" },
  { text: "test skill2", type: SkillsEnum.FRONTEND, website: "test2-site" },
];

export const mockMetadata: SiteMetadata = {
  title: "Test title",
  email: "test@email.com",
  description: "test description",
  keywords: ["cool", "keyword!"],
  siteUrl: "site.cool",
};

export const projectOne = {
  node: {
    html: `<p>project one content</p>`,
    id: "project-one-id",
    frontmatter: {
      title: "Project One",
      app: "project-one-app.nice",
      repo: "roject-one-repo.cool",
      order: 1,
      iconName: ProjectIconName.GRAPH,
    },
  },
};

export const projectTwo = {
  node: {
    html: `<p>project two content</p>`,
    id: "project-two-id",
    frontmatter: {
      title: "Project Two",
      app: "project-two-app.nice",
      repo: "project-two-repo.cool",
      order: 2,
      iconName: ProjectIconName.VINYL,
    },
  },
};

export const mockProjects: ProjectsListContent = {
  projects: {
    edges: [projectOne, projectTwo],
    pageInfo: { itemCount: 2 },
  },
};

const tags = [
  {
    fieldValue: "Test tag one",
    totalCount: 5,
  },
  {
    fieldValue: "Test tag two",
    totalCount: 1,
  },
  {
    fieldValue: "Test tag three",
    totalCount: 2,
  },
];

export const mockTags: TagsPageProps = {
  tagsData: {
    group: tags,
  },
};

export const postOne = {
  id: "post-one-id",
  fields: {
    slug: "/blog/post-one/",
  },
  frontmatter: {
    date: "October 14, 2024",
    title: "Post One",
    description: "This is post one",
    tags: ["JavaScript", "Basics", "Setup"],
    skillLevel: "+++",
  },
};

export const postTwo = {
  id: "post-two-id",
  fields: {
    slug: "/blog/post-two/",
  },
  frontmatter: {
    date: "October 19, 2024",
    title: "Post Two",
    description: "This is post two",
    tags: ["JavaScript", "Advanced"],
    skillLevel: "++",
  },
};

export const mockTagPagePosts = {
  allMarkdownRemark: {
    totalCount: 2,
    edges: [
      {
        node: postOne,
      },
      {
        node: postTwo,
      },
    ],
  },
};

export const mockBlogList = {
  postsData: {
    nodes: [postOne, postTwo],
  },
};

export const mockSingleBlogPosts = {
  singleBlogOne: createSinglePost(1, { nextBlog: true, prevBlog: false }),
  singleBlogTwo: createSinglePost(2, { nextBlog: true, prevBlog: true }),
};

export const themeColorLookup = {
  [SiteTheme.SILVER]: "#014b95",
  [SiteTheme.GOLD]: "#b10c0c",
  [SiteTheme.BRONZE]: "#900c3f",
  [SiteTheme.CLASSIC]: "#0000cc",
  [SiteTheme.NEON]: "#f00",
  [SiteTheme.CAKE]: "#a90000",
};

export const testThemeMap = {
  TEST_ONE: {
    themeColor: "test color one",
  },
  TEST_TWO: {
    themeColor: "test color two",
  },
};

export const testEmojiConfig: EmojiConfig[] = [
  {
    emoji: "😎",
    name: "guy",
    theme: { is: [SiteTheme.SILVER] },
  },
  {
    emoji: "🍕",
    name: "pizza",
    theme: { not: [SiteTheme.SILVER] },
  },
];
