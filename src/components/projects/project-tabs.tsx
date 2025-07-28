import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { type ProjectTabsProps, SliderDirection } from "../../types";
import { handleSliderArrow } from "../../utils";

const tabsContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  fontWeight: 400,
  maxWidth: { xs: "400px", sm: "500px" }, // todo - adjust this?
  margin: { xs: "25px auto 30px", sm: "55px auto 55px" },
  "& .MuiTabs-root": {
    minWidth: "70%",
  },
  "& .MuiTabs-scroller": {
    alignContent: "center",
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

const tabIconStyles: SxProps = {
  cursor: "pointer",
  color: "primary.main",
  fontSize: { xs: "2.1rem", sm: "2.7rem", md: "3rem" },
};

export const ProjectTabs = ({
  value,
  numProjects,
  tabLabels,
  handleChange,
}: ProjectTabsProps): JSX.Element => {
  return (
    <Box sx={tabsContainerStyles}>
      <ChevronLeftIcon
        sx={tabIconStyles}
        onClick={() => {
          handleChange(
            handleSliderArrow(SliderDirection.LEFT, value, numProjects)
          );
        }}
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
      <ChevronRightIcon
        sx={tabIconStyles}
        onClick={() => {
          handleChange(
            handleSliderArrow(SliderDirection.RIGHT, value, numProjects)
          );
        }}
      />
    </Box>
  );
};
