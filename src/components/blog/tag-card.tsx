import * as React from "react";

import type { SxProps } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link as InternalLink } from "gatsby";

import { createTagPageLink, pluralWord } from "../../utils";

const singleTagStyles: SxProps = {
  minWidth: "275px",
  maxWidth: { xs: "275px", lg: "345px" },
  padding: { xs: "20px 5px", lg: "25px 5px 35px 5px" },
  margin: "10px 10px",
  textAlign: "center",
  width: { xs: "100%", md: "48%" },
  h4: {
    fontWeight: 600,
    fontSize: "30px",
  },
  "& .card-content": {
    padding: "0 0 20px 0",
  },
  "& .total-count": {
    padding: "10px",
  },
  "& .card-action": {
    justifyContent: "center",
  },
};

interface TagCardProps {
  fieldValue: string;
  totalCount: number;
}

const TagCard = ({ fieldValue, totalCount }: TagCardProps): JSX.Element => {
  return (
    <Card key={fieldValue} sx={singleTagStyles}>
      <CardContent className="card-context">
        <Typography variant="h4">{fieldValue}</Typography>
        <Typography variant="body1" className="total-count">
          {totalCount} {pluralWord(totalCount, "post")}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <InternalLink
          to={createTagPageLink(fieldValue)}
          className="blog-post-link"
          data-testid={`${fieldValue}-tag-link`}
        >
          View Posts
        </InternalLink>
      </CardActions>
    </Card>
  );
};

export default TagCard;
