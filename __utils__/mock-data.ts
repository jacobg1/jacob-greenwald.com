import {
  ProjectIconName,
  type ProjectsListContent,
  type SiteMetadata,
  type Skill,
  SkillsEnum,
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
