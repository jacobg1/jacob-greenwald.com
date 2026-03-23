import React, { JSX } from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { skillIconsMapping } from "./skill-icons-mapping";

const skillIconStyles: SxProps = {
  display: { lg: "flex" },
  flexDirection: { lg: "flex-direction" },
  "& .skill-icon": {
    alignItems: "center",
    display: "flex",
    marginRight: { lg: "20px" },
  },
};

export const SkillIconsKey = (): JSX.Element => {
  return (
    <Box sx={skillIconStyles}>
      {Object.entries(skillIconsMapping).map(
        ([key, val]: [string, JSX.Element]) => (
          <Box className="skill-icon" key={`skill-icon-${key}`}>
            {val}
            <span style={{ margin: "0 5px" }}>-</span>{" "}
            <Typography variant="subtitle1">{key}</Typography>
          </Box>
        )
      )}
    </Box>
  );
};
