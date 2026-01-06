import * as React from "react";

import { cleanup, render, screen } from "@testing-library/react";

import { mockProjectIconMap } from "../../../../__utils__";
import { ProjectIconName } from "../../../types";
import { ProjectIcon } from "../project-icon";

describe("project icon", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the correct icons", () => {
    Object.values(ProjectIconName).forEach((name) => {
      render(<ProjectIcon iconName={name} iconMap={mockProjectIconMap} />);
      expect(screen.getByTestId(`${name}-icon`)).toBeVisible();
      expect(screen.getByTestId(`${name}-svg`)).toBeVisible();
      cleanup();
    });
  });

  it("renders no icon if not properly configured", () => {
    const mockIconName = "MOCK_ICON";

    render(
      <ProjectIcon
        iconName={mockIconName as ProjectIconName}
        iconMap={mockProjectIconMap}
      />
    );

    expect(screen.queryByTestId(`${mockIconName}-svg`)).toBeNull();
  });
});
