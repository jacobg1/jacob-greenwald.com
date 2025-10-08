import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { ButtonLinkProps } from "../../types";

const buttonLinkStyles: SxProps = {
  width: "30%",
  textAlign: "center",
  maxWidth: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    fill: "#000000",
    width: "21px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: { sm: "23px" },
  },
  "& .button-text": {
    paddingTop: "2px",
  },
  "& .MuiButton-startIcon": {
    paddingBottom: "2px",
  },
  "& .MuiButton-root": {
    width: "100%",
    lineHeight: { xs: "21px", sm: "24px" },
    fontSize: { sm: "17px" },
    fontWeight: 700,
    "&:hover": {
      background: "#ffffff",
      boxShadow: "1px 1px 1px black",
      textDecoration: "none",
    },
  },
};

export const ButtonLink = ({
  text,
  linkHref,
  icon,
  testId,
}: ButtonLinkProps): JSX.Element => {
  return (
    <Box sx={buttonLinkStyles} className="button-link-container">
      <Button
        className="button-link"
        href={linkHref}
        target="_blank"
        variant="outlined"
        startIcon={icon}
        rel="noopener noreferrer"
        data-testid={testId}
      >
        <Box className="button-text" component="span">
          {text}
        </Box>
      </Button>
    </Box>
  );
};
