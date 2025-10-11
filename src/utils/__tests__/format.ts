import {
  capitalizeWord,
  createTagPageLink,
  createTagPageSlug,
  pluralWord,
} from "../format";

describe("format utils", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("capitalizeWord works properly", () => {
    const word = capitalizeWord("test");
    expect(word).toBe("Test");
  });

  it("pluralWord works properly", () => {
    const testOne = pluralWord(1, "test");
    const testTwo = pluralWord(2, "test");
    expect(testOne).toBe("test");
    expect(testTwo).toBe("tests");
  });

  it("createTagPageLink works properly", () => {
    const input = "Test Tag";
    const expected = "/tags/test-tag/";
    const output = createTagPageLink(input);
    expect(output).toBe(expected);
  });

  it("createTagPageSlug works properly", () => {
    const input = "Test Tag";
    const expected = "test-tag";
    const output = createTagPageSlug(input);
    expect(output).toBe(expected);
  });
});
