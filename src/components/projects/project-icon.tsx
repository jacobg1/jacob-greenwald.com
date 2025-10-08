import * as React from "react";

import Box from "@mui/material/Box";

import { ReactComponent as GraphIcon } from "../../images/auto-graph.svg";
import { ReactComponent as SpaceIcon } from "../../images/space-search.svg";
import { ReactComponent as VinylIcon } from "../../images/vinyl.svg";
import { ProjectIconName, ProjectIconProps } from "../../types";

const iconMap = {
  [ProjectIconName.VINYL]: VinylIcon,
  [ProjectIconName.SPACE]: SpaceIcon,
  [ProjectIconName.GRAPH]: GraphIcon,
};

export const ProjectIcon = ({
  iconName,
}: ProjectIconProps): JSX.Element | null => {
  const Icon = iconMap[iconName];

  return (
    <Box className="project-icon" data-testid={`${iconName}-icon`}>
      {Icon ? <Icon /> : null}
    </Box>
  );
};
