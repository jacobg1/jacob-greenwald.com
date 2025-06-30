import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql, type HeadProps, type PageProps } from "gatsby";

import { NextAndPreviousPost } from "../components/blog/next-and-previous-post";
import { Content } from "../components/global/content";
import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { SingleBlogProps } from "../types";

const singleBlogStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
  "& .single-blog-content": {
    paddingBottom: "40px",
  },
  "& pre[class*=language-]": {
    margin: "30px 0",
  },
};

const SingleBlog = ({
  data: { post, next, previous },
}: PageProps<SingleBlogProps>): JSX.Element => {
  return (
    <Box className="single-blog" sx={singleBlogStyles}>
      <GoBack page="/blog/" />
      <Typography variant="h2">{post.frontmatter.title}</Typography>
      <Content content={post.html} className="single-blog-content" />
      <NextAndPreviousPost previousPost={previous} nextPost={next} />
    </Box>
  );
};

export const pageQuery = graphql`
  query SingleBlogPost(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default SingleBlog;

export const Head = ({
  location: { pathname },
  data: {
    post: {
      frontmatter: { title, description },
    },
  },
}: HeadProps<SingleBlogProps>): JSX.Element => {
  return (
    <PageMeta metaTitle={title} slug={pathname} metaDescription={description} />
  );
};
