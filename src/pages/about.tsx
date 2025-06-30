import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { graphql, type HeadProps, type PageProps } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

import { Content } from "../components/global/content";
import { PageMeta } from "../components/global/page-meta";
import { SkillsList } from "../components/skills/skills-list";
import { PageContentWithImage } from "../types";

const aboutPageStyles: SxProps = {
  maxWidth: "1750px",
  margin: {
    xs: "15px 0 0",
    sm: "25px 0 0",
    md: "auto",
  },
  textAlign: { xs: "center", md: "left" },
  "& .image-container": {
    margin: { xs: "20px auto 30px", md: 0 },
    alignSelf: { xs: "center", md: "flex-start" },
    maxWidth: { xs: "175px", sm: "250px" },
  },
  "& .MuiTypography-h2": {
    textAlign: "center",
    marginTop: { xs: "25px", md: "50px" },
  },
  "& .divider": {
    width: { xs: "90%", md: "80%" },
    margin: {
      xs: "15px auto 10px",
      // md: "25px auto 50px",
      // lg: "25px auto 75px",
    },
  },
};

const contentStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "auto",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { xs: "center", md: "space-evenly" },
  "& p": {
    margin: 0,
  },
  "& .page-content": {
    padding: "20px 0 0 0",
  },
  "& .content": {
    textAlign: "left",
    width: { sm: "65%" },
    margin: { xs: "0 auto 30px", md: 0 },
  },
};

const AboutPage = ({
  data: {
    content: {
      html,
      frontmatter: { title },
    },
    // featuredImage: {
    //   childImageSharp: { gatsbyImageData },
    // },
  },
}: PageProps<PageContentWithImage>): JSX.Element => {
  return (
    <Box display="flex">
      <Box sx={aboutPageStyles}>
        <Typography variant="h2">{title}</Typography>
        <Divider className="divider" />
        <Box sx={contentStyles}>
          {/* <Box className="image-container">
            <GatsbyImage image={gatsbyImageData} alt="about me image" />
          </Box> */}
          <Box className="content">
            <Content content={html} />
            <SkillsList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    content: markdownRemark(frontmatter: { page: { eq: "about" } }) {
      html
      frontmatter {
        title
      }
    }
    # featuredImage: file(relativePath: { regex: "/about-me-image/" }) {
    #   childImageSharp {
    #     gatsbyImageData(
    #       width: 400
    #       height: 450
    #       layout: CONSTRAINED
    #       placeholder: TRACED_SVG
    #       formats: [AUTO, WEBP, AVIF]
    #     )
    #   }
    # }
  }
`;

export default AboutPage;

export const Head = ({
  location,
  data: {
    content: {
      frontmatter: { title },
    },
  },
}: HeadProps<PageContentWithImage>): JSX.Element => {
  return <PageMeta metaTitle={title} slug={location.pathname} />;
};
