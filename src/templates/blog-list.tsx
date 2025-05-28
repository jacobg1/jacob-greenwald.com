import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { graphql, type PageProps, Link as InternalLink } from "gatsby";

import { BlogListItem } from "../components/blog/blog-list-item";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { BlogsListProps, BlogListContext } from "../types";

const blogListStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
};

const BlogListPage = ({
  data: {
    postsData: { nodes },
  },
  pageContext: { totalPages, currentPage },
}: PageProps<BlogsListProps, BlogListContext>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="Blog" />
      <Box sx={blogListStyles}>
        <TitleWithDivider title="Blog Posts" />
        {nodes.map(({ id, ...post }) => (
          <BlogListItem key={id} {...post} />
        ))}
        {totalPages > 1 ? (
          <Pagination
            sx={{
              paddingTop: "20px",
            }}
            count={totalPages}
            page={currentPage}
            renderItem={(item) => (
              <PaginationItem
                component={InternalLink}
                to={item.page === 1 ? "/blog/" : `/blog/${item.page}/`}
                {...item}
              />
            )}
          />
        ) : null}
      </Box>
    </>
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
