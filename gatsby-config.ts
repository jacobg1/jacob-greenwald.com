import path from "path";

import type { GatsbyConfig } from "gatsby";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Jacob Greenwald's Portfolio",
    email: "greenwald.j8@gmail.com",
    description:
      "A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I create success by drawing on my dedication, persistence and passion for building software and customer experiences.",
    keywords: [
      "Jacob Greenwald",
      "Portfolio",
      "Software Engineer",
      "Typescript",
      "JavaScript",
    ],
    siteUrl: "https://www.jacob-greenwald.com",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        incude: /images/,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-posts",
        path: `${__dirname}/src/content/blog-posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
            },
          },
          "gatsby-remark-static-images",
          "gatsby-remark-emoji-unicode",
          {
            resolve: "gatsby-remark-prismjs",
            options: {},
          },
        ],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Overpass",
            file: "https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700;900&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/terminal.svg",
      },
    },
  ],
};

export default config;
