import { type ReactNode } from "react";

import { IGatsbyImageData } from "gatsby-plugin-image";

import { ProjectIconName, SiteTheme } from "./enum";

export interface NavLinkItem {
  text: string;
  destination: string;
  newTab: boolean;
}

export enum SkillsEnum {
  BACKEND = "backend",
  FRONTEND = "frontend",
  DATABASE = "database",
}

export interface Skill {
  text: string;
  type: string | SkillsEnum;
  website: string;
}

export interface NavLinkList {
  navLinks: NavLinkItem[];
}

export interface MobileHeaderProps extends NavLinkList {
  isOpen: boolean;
  onClick: () => void;
}

export interface QueryData<T> {
  markdownRemark: {
    frontmatter: {
      [key: string]: T;
    };
  };
}

export interface MetadataQuery<T> {
  site: {
    siteMetadata: T;
  };
}

type ProjectContent = {
  title: string;
  app: string;
  repo: string;
  order: number;
  iconName: ProjectIconName;
};

export type HtmlString = string;

export interface PageContent {
  content: {
    html: HtmlString;
    frontmatter: {
      title: string;
    };
  };
}

interface GatsbyImageSharp {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface PageContentWithImage extends PageContent {
  featuredImage: GatsbyImageSharp;
}

interface Node {
  html: HtmlString;
  id: string;
  frontmatter: ProjectContent;
}

type Edge = {
  node: Node;
};

export interface ProjectsListContent {
  projects: {
    edges: Edge[];
  };
}

export interface SiteMetadata {
  title: string;
  email: string;
  description: string;
  keywords: string[];
  siteUrl: string;
}

export interface PageMetaProps {
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
}

export interface ProjectProps {
  html: HtmlString;
  title: string;
  app: string;
  repo: string;
  value: number;
  index: number;
  iconName: ProjectIconName;
}

export interface ProjectTabsProps {
  tabLabels: number[] | string[];
  value: number;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
}

export interface ButtonLinkProps {
  text: string;
  linkHref: string;
  icon: JSX.Element | JSX.Element[];
}

export interface ProjectIconProps {
  iconName: ProjectIconName;
}

export interface ThemeSelectorButtonProps {
  themeOption: SiteTheme;
  selectedTheme: SiteTheme;
  setSiteTheme: (selectedTheme: SiteTheme) => void;
  handleClose: () => void;
}

export interface EmojiProps {
  name: string;
  children: ReactNode;
}

export interface CopyToClipboardProps {
  value: string;
  isMobileHeader: boolean;
}

export interface SiteEmailProps {
  isMobileHeader?: boolean;
}
