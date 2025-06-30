import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { graphql, type HeadProps, type PageProps } from "gatsby";

import TagCard from "../components/blog/tag-card";
import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { TagsPageProps } from "../types";

const tagsPageStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
};

const tagsContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "35px",
};

const TagsPage = ({
  data: {
    tagsData: { group: tags },
  },
}: PageProps<TagsPageProps>): JSX.Element => {
  return (
    <Box sx={tagsPageStyles}>
      <GoBack page="/blog/" />
      <TitleWithDivider title="All Tags" />
      <Box sx={tagsContainerStyles}>
        {tags.map(({ fieldValue, totalCount }) => (
          <TagCard
            key={fieldValue}
            fieldValue={fieldValue}
            totalCount={totalCount}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsPageQuery {
    tagsData: allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = ({ location }: HeadProps<TagsPageProps>): JSX.Element => {
  return (
    <PageMeta
      metaTitle="All Tags"
      metaDescription="List of all post tags."
      slug={location.pathname}
    />
  );
};
