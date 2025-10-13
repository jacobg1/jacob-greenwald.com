import * as React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as InternalLink } from "gatsby";

import type { PostButtonProps } from "../../types";

export const PreviousPostLink = ({ post }: PostButtonProps): JSX.Element => {
  // Return an empty div to keep the next post button right aligned
  if (!post) return <Box />;

  return (
    <Box className="next-post-container">
      <InternalLink className="next-post-link" to={post.fields.slug}>
        <ArrowBackIcon />
        <Typography className="prev-post-text" variant="subtitle1">
          prev
        </Typography>
      </InternalLink>
    </Box>
  );
};

export const NextPostLink = ({ post }: PostButtonProps): JSX.Element | null => {
  if (!post) return null;

  return (
    <Box className="next-post-container">
      <InternalLink className="next-post-link" to={post.fields.slug}>
        <Typography className="next-post-text" variant="subtitle1">
          next
        </Typography>
        <ArrowForwardIcon />
      </InternalLink>
    </Box>
  );
};
