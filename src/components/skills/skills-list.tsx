import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SingleSkill } from "./single-skill";
import { SkillIconsKey } from "./skill-icons-key";
import { useSkillsQuery } from "../../hooks/use-skills-query";
import { Skill } from "../../types";
import { EmojiContainer } from "../global/emoji";

const skillsListStyles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  "& .button-link-container": {
    width: "auto",
    margin: "5px",
    "& .MuiButton-root": {
      lineHeight: "17px",
    },
    "& .button-link": {
      textTransform: "lowercase",
      border: "1px solid #1976d2",
      boxShadow: "1px 1px 1px black",
      "&:hover": {
        boxShadow: "none",
        borderColor: "black",
      },
    },
  },
};

const skillsSectionStyles: SxProps = {
  margin: {
    sm: "30px auto",
    md: "55px auto",
    lg: "100px auto",
  },
  "& .skills-header": {
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
  },
  "& .robot-arm": {
    padding: "0 0 4px 5px",
    fontSize: { xs: "18px", sm: "22px", lg: "24px" },
  },
};

const skillsHeaderStyles: SxProps = {
  maxWidth: { md: "85%", lg: "93%" },
  display: "flex",
  alignItems: "center",
  margin: "0 0 10px 5px",
  justifyContent: "space-between",
};

export const SkillsList = (): JSX.Element => {
  const mySkills = useSkillsQuery<Skill[]>();
  return (
    <Box className="skills-section" sx={skillsSectionStyles}>
      <Box sx={skillsHeaderStyles}>
        <Typography className="skills-header" variant="h3">
          Skills
          <EmojiContainer name="robot-arm">🦾</EmojiContainer>
        </Typography>
        <SkillIconsKey />
      </Box>
      <Box sx={skillsListStyles}>
        {mySkills.map((skill, i) => (
          <SingleSkill key={`skill-${i}`} {...skill} />
        ))}
      </Box>
    </Box>
  );
};
