import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { SxProps } from "@mui/material";

import { type ProjectSliderArrowProps, SliderDirection } from "../../types";
import { handleSliderArrow } from "../../utils";

const sliderArrowStyles: SxProps = {
  cursor: "pointer",
  color: "primary.main",
  fontSize: { xs: "2.1rem", sm: "2.7rem", md: "3rem" },
};

export function ProjectSliderArrow({
  handleChange,
  value,
  numProjects,
  dir,
}: ProjectSliderArrowProps): JSX.Element {
  const Icon =
    dir === SliderDirection.LEFT ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <Icon
      sx={sliderArrowStyles}
      onClick={() => {
        handleChange(handleSliderArrow(dir, value, numProjects));
      }}
    />
  );
}
