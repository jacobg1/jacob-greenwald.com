import * as React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SliderDirection } from "../../../types";
import { ProjectSliderArrow } from "../project-slider-arrow";

describe("project slider arrow", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("clicking on right arrow works", async () => {
    const user = userEvent.setup();
    const mockClickHandler = jest.fn();

    const { getByTestId } = render(
      <ProjectSliderArrow
        handleChange={mockClickHandler}
        value={0}
        numProjects={3}
        dir={SliderDirection.RIGHT}
      />
    );

    await user.click(getByTestId("ChevronRightIcon"));
    expect(mockClickHandler).toHaveBeenCalledWith(1);
  });

  it("clicking on left arrow works", async () => {
    const user = userEvent.setup();
    const mockClickHandler = jest.fn();

    const { getByTestId } = render(
      <ProjectSliderArrow
        handleChange={mockClickHandler}
        value={3}
        numProjects={3}
        dir={SliderDirection.LEFT}
      />
    );

    await user.click(getByTestId("ChevronLeftIcon"));
    expect(mockClickHandler).toHaveBeenCalledWith(2);
  });
});
