import * as React from "react";

import { cleanup, render } from "@testing-library/react";

import { mockProjectIconMap } from "../../../../__utils__";
import { ProjectIconName } from "../../../types";
import { ProjectIcon } from "../project-icon";

describe("project icon", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the correct icons", () => {
    Object.values(ProjectIconName).forEach((name) => {
      const { getByTestId } = render(
        <ProjectIcon iconName={name} iconMap={mockProjectIconMap} />
      );
      expect(getByTestId(`${name}-icon`)).toBeVisible();
      expect(getByTestId(`${name}-svg`)).toBeVisible();
      cleanup();
    });
  });

  it("renders no icon if not properly configured", () => {
    const mockIconName = "MOCK_ICON";

    const { queryByTestId } = render(
      <ProjectIcon
        iconName={mockIconName as ProjectIconName}
        iconMap={mockProjectIconMap}
      />
    );

    expect(queryByTestId(`${mockIconName}-svg`)).toBeNull();
  });
});
