import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { ProjectSliderArrow } from "./project-slider-arrow";
import { type ProjectTabsProps, SliderDirection } from "../../types";

const tabsContainerStyles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  alignContent: "center",
  fontWeight: 400,
  maxWidth: { xs: "400px", sm: "500px", md: "600px" },
  margin: { xs: "25px auto 30px", sm: "55px auto 55px" },
  "& .MuiTabs-root": {
    minWidth: "70%",
    alignItems: "center",
  },
  "& .MuiTabs-scroller": {
    alignContent: "center",
  },
  "& .MuiSvgIcon-root": {
    alignSelf: "center",
  },
};

const projectTabStyles: SxProps = {
  padding: 0,
  fontWeight: 400,
  fontSize: { md: "17px" },
  minHeight: { xs: "32px", sm: "40px" },
  lineHeight: "1px",
  alignItems: "center",
  minWidth: "40px",
  borderRadius: "33px",
  "&:hover": {
    fontWeight: 700,
    textDecoration: "none",
  },
  "&.Mui-selected": {
    fontWeight: 700,
    backgroundColor: "#ffffff",
  },
};

export const ProjectTabs = ({
  value,
  numProjects,
  tabLabels,
  handleChange,
}: ProjectTabsProps): JSX.Element => {
  return (
    <Box sx={tabsContainerStyles}>
      <ProjectSliderArrow
        handleChange={handleChange}
        value={value}
        numProjects={numProjects}
        dir={SliderDirection.LEFT}
      />
      <Tabs
        value={value}
        onChange={(_, val: number) => handleChange(val)}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="Project selector"
        centered
      >
        {tabLabels.map((label) => (
          <Tab
            sx={projectTabStyles}
            key={`project-tab-${label}`}
            label={`# ${label}`}
          />
        ))}
      </Tabs>
      <ProjectSliderArrow
        handleChange={handleChange}
        value={value}
        numProjects={numProjects}
        dir={SliderDirection.RIGHT}
      />
    </Box>
  );
};
