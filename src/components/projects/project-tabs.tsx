import * as React from "react";

import type { SxProps } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { ProjectTabsProps } from "../../types/interface";

const projectTabsStyle: SxProps = {
  alignItems: "center",
  fontWeight: 400,
  maxWidth: "500px",
  margin: { xs: "25px auto 30px", sm: "55px auto 55px" },
  "& .MuiTab-root": {
    padding: 0,
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
  },
};

export const ProjectTabs = ({
  value,
  tabLabels,
  handleChange,
}: ProjectTabsProps): JSX.Element => {
  return (
    <Tabs
      sx={projectTabsStyle}
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="Project selector"
      centered
    >
      {tabLabels.map((label) => (
        <Tab key={`project-tab-${label}`} label={`# ${label}`} />
      ))}
    </Tabs>
  );
};
