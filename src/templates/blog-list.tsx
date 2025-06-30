import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { graphql, type PageProps, navigate, type HeadProps } from "gatsby";

import { BlogListItem } from "../components/blog/blog-list-item";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import type { BlogsListProps, BlogListContext } from "../types";

const blogListStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
  "& .MuiPagination-root": {
    paddingTop: "20px",
  },
  "& .emoji": {
    fontSize: "32px",
    marginLeft: "7px",
  },
};

const BlogListPage = ({
  data: {
    postsData: { nodes },
  },
  pageContext: { totalPages, currentPage },
}: PageProps<BlogsListProps, BlogListContext>): JSX.Element => {
  return (
    <Box sx={blogListStyles}>
      <TitleWithDivider
        title="Blog Posts"
        emojiConfig={{ emoji: "☕️", name: "coffee" }}
      />
      {nodes.map(({ id, ...post }) => (
        <BlogListItem key={id} {...post} />
      ))}
      {totalPages > 1 ? (
        <Pagination
          count={totalPages}
          page={currentPage}
          shape="rounded"
          onChange={(_, value: number) => {
            const pageUrl = value === 1 ? "/blog" : `/blog/${value}`;
            navigate(pageUrl);
          }}
        />
      ) : null}
    </Box>
  );
};

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    postsData: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      sort: [
        { frontmatter: { postOrder: ASC } }
        { frontmatter: { date: DESC } }
      ]
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;

export default BlogListPage;

export const Head = ({ location }: HeadProps<BlogsListProps>): JSX.Element => {
  return (
    <PageMeta
      metaTitle="Blog"
      metaDescription="List of all blog posts."
      slug={location.pathname}
    />
  );
};
