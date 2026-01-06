import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SiteTheme } from "../../../types";
import { capitalizeWord } from "../../../utils";
import { ThemeSelector } from "../theme-selector";

describe("theme selector", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("theme selector opens and closes on theme selection", async () => {
    const user = userEvent.setup();
    render(<ThemeSelector />);

    await user.click(screen.getByText("Change Theme"));

    const themeName = capitalizeWord(SiteTheme.GOLD);
    const themeToSelect = screen.getByText(themeName);

    expect(themeToSelect).toBeInTheDocument();
    await user.click(themeToSelect);
    expect(screen.queryByText(themeName)).not.toBeInTheDocument();
  });
});
