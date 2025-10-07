import { type SiteMetadata, type Skill, SkillsEnum } from "../src/types";

export const mockSkills: Skill[] = [
  { text: "test skill", type: SkillsEnum.BACKEND, website: "test-site" },
  { text: "test skill2", type: SkillsEnum.FRONTEND, website: "test2-site" },
];

export const mockMetadata: SiteMetadata = {
  title: "Test title",
  email: "test@email.com",
  description: "test description",
  keywords: ["cool", "keyword!"],
  siteUrl: "site.site",
};
