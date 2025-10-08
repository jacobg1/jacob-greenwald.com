import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { ProjectIcon } from "./project-icon";
import { ProjectProps } from "../../types";
import { ButtonLink } from "../global/button-link";
import { Content } from "../global/content";

const projectStyles: SxProps = {
  position: "static",
  zIndex: "1",
  "& .divider": {
    margin: "15px 0 20px",
  },
  "& .MuiTypography-h3": {
    marginTop: "7px",
    marginRight: "16px",
    justifyContent: "center",
  },
  "& .project-links": {
    display: "flex",
    margin: { xs: "28px 0", sm: "40px 0" },
    justifyContent: { xs: "space-around" },
  },
  "& .project-icon": {
    display: "flex",
    alignSelf: "center",
    svg: {
      overflow: "visible",
      height: { xs: "28px", sm: "38px" },
      width: { xs: "28px", sm: "38px" },
    },
  },
  "& .project-container": {
    width: { lg: "65%" },
    maxWidth: { xs: "450px", sm: "1000px" },
    margin: { xs: "auto", md: "50px auto 40px" },
  },
  "& .project-title": {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: { sm: "center" },
  },
  "& a:hover": {
    textDecoration: "underline",
  },
};

export const Project = ({
  html,
  title,
  repo,
  app,
  value,
  index,
  iconName,
}: ProjectProps): JSX.Element => {
  return (
    <Box hidden={value !== index} sx={projectStyles} component="article">
      <Box className="project-title">
        <Typography variant="h3">{title}</Typography>
        <ProjectIcon iconName={iconName} />
      </Box>
      <Divider className="divider" />
      <Box className="project-container">
        <Box className="project-links">
          <ButtonLink
            text="App"
            testId={`${title}-app-button`}
            linkHref={app}
            icon={<TerminalIcon />}
          />
          <ButtonLink
            text="Repo"
            testId={`${title}-repo-button`}
            linkHref={repo}
            icon={<GitHubIcon />}
          />
        </Box>
        <Content content={html} />
      </Box>
    </Box>
  );
};
