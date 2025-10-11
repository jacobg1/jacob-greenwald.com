import { testEmojiConfig } from "../../../__utils__";
import { SiteTheme, SliderDirection } from "../../types";
import {
  includesBlog,
  includesTags,
  handleSliderArrow,
  getEmojisToShow,
} from "../util";

describe("utils", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("includesBlog works properly", () => {
    expect(includesBlog("/blog/", "/blog/")).toBe(true);
    expect(includesBlog("/blog/test/", "/blog/")).toBe(true);
    expect(includesBlog("/blog/test/", "/test/")).toBe(false);
  });

  it("includesTags works properly", () => {
    expect(includesTags("/tags/", "/blog/")).toBe(true);
    expect(includesTags("/tags/test/", "/blog/")).toBe(true);
    expect(includesTags("/tags/test/", "/test/")).toBe(false);
  });

  it("handleSliderArrow works properly", () => {
    expect(handleSliderArrow(SliderDirection.LEFT, 2, 3)).toBe(1);
    expect(handleSliderArrow(SliderDirection.LEFT, 0, 3)).toBe(2);
    expect(handleSliderArrow(SliderDirection.RIGHT, 0, 3)).toBe(1);
    expect(handleSliderArrow(SliderDirection.RIGHT, 2, 3)).toBe(0);
  });

  it("getEmojisToShow works properly", () => {
    const [pizza] = getEmojisToShow(SiteTheme.CLASSIC, testEmojiConfig);
    expect(pizza.emoji).toBe("🍕");

    const [guy] = getEmojisToShow(SiteTheme.SILVER, testEmojiConfig);
    expect(guy.emoji).toBe("😎");
  });
});
