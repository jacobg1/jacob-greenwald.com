import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testThemeSelector } from "../../../../__utils__";
import { SiteTheme } from "../../../types";
import { capitalizeWord } from "../../../utils";
import { ThemeSelectorButton } from "../theme-selector-button";

const setSiteThemeMock = jest.fn();
const handleCloseMock = jest.fn();

const activeStyle = "border: 2px solid";
const inactiveStyle = "border: 0px";

describe("theme selector button", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("properly sets the theme", async () => {
    const user = userEvent.setup();

    const themeOption = SiteTheme.CAKE;
    const selectedTheme = SiteTheme.CLASSIC;

    render(
      <ThemeSelectorButton
        themeOption={themeOption}
        selectedTheme={selectedTheme}
        setSiteTheme={setSiteThemeMock}
        handleClose={handleCloseMock}
      />
    );

    const label = screen.getByText(capitalizeWord(themeOption));

    await user.click(label);

    testThemeSelector(themeOption, setSiteThemeMock, handleCloseMock);
    expect(label.parentElement).toHaveStyle(inactiveStyle);
  });

  it("properly sets the theme active class", async () => {
    const user = userEvent.setup();

    const themeOption = SiteTheme.CLASSIC;
    const selectedTheme = SiteTheme.CLASSIC;

    render(
      <ThemeSelectorButton
        themeOption={themeOption}
        selectedTheme={selectedTheme}
        setSiteTheme={setSiteThemeMock}
        handleClose={handleCloseMock}
      />
    );

    const label = screen.getByText(capitalizeWord(themeOption));

    await user.click(label);

    testThemeSelector(themeOption, setSiteThemeMock, handleCloseMock);
    expect(label.parentElement).toHaveStyle(activeStyle);
  });
});
