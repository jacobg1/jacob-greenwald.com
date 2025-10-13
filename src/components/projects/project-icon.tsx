import * as React from "react";

import Box from "@mui/material/Box";

import { ProjectIconProps } from "../../types";

export const ProjectIcon = ({
  iconName,
  iconMap,
}: ProjectIconProps): JSX.Element | null => {
  const Icon = iconMap[iconName];

  return (
    <Box className="project-icon" data-testid={`${iconName}-icon`}>
      {Icon ? <Icon /> : null}
    </Box>
  );
};
