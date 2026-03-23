import React, { JSX } from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as InternalLink } from "gatsby";

import { TagsList } from "./tags-list";
import type { BlogListNode } from "../../types";

const blogListItemStyles: SxProps = {
  margin: { xs: "35px 0", sm: "35px 30px" },
  "& .blog-post-link": {
    fontSize: { xs: "25px", md: "30px" },
  },
  "& .blog-item-date": {
    fontWeight: 800,
    padding: "5px 0 10px 0",
    fontSize: "17px",
  },
};

export function BlogListItem({
  fields: { slug },
  frontmatter: { date, title, description, tags },
}: Omit<BlogListNode, "id">): JSX.Element {
  return (
    <Box sx={blogListItemStyles}>
      <InternalLink className="blog-post-link" to={slug}>
        {title}
      </InternalLink>
      <Typography className="blog-item-date" variant="body1">
        {date}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      {tags?.length ? <TagsList tags={tags} /> : null}
    </Box>
  );
}
