import * as React from "react";

import { render } from "@testing-library/react";
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

    const { getByText, queryByText } = render(<ThemeSelector />);
    await user.click(getByText("Change Theme"));

    const themeName = capitalizeWord(SiteTheme.GOLD);
    const themeToSelect = getByText(themeName);
    expect(themeToSelect).toBeInTheDocument();

    await user.click(themeToSelect);
    expect(queryByText(themeName)).not.toBeInTheDocument();
  });
});
