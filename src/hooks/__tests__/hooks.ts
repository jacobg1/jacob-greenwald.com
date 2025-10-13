import { act, renderHook } from "@testing-library/react";
import * as Gatsby from "gatsby";

import { mockNavLinks, setupLocalStore } from "../../../__utils__";
import { type NavLinkItem, SiteTheme } from "../../types";
import { useLocalStorage } from "../use-local-storage";
import { useNavLinksQuery } from "../use-navlinks-query";

const testKey = "test-key";
const mockUseStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

describe("hooks", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("useLocalStorage works properly", () => {
    const { result } = renderHook(() =>
      useLocalStorage(testKey, SiteTheme.SILVER, "")
    );

    expect(result.current[0]).toBe(SiteTheme.SILVER);
    act(() => result.current[1](SiteTheme.CLASSIC));
    expect(result.current[0]).toBe(SiteTheme.CLASSIC);
  });

  it("interacts with the localStorage api properly", () => {
    const { mockGetItem, mockSetItem } = setupLocalStore();

    const { result } = renderHook(() =>
      useLocalStorage(testKey, SiteTheme.SILVER, "")
    );

    expect(mockGetItem).toHaveBeenCalledWith(testKey);
    act(() => result.current[1](SiteTheme.SILVER));
    expect(mockSetItem).toHaveBeenCalledWith(testKey, SiteTheme.SILVER);
  });
  it("handles errors from storage api properly", () => {
    const { mockGetItem, mockSetItem } = setupLocalStore();

    mockGetItem.mockImplementationOnce(() => {
      throw new Error("get item failed");
    });

    mockSetItem.mockImplementationOnce(() => {
      throw new Error("set item failed");
    });

    const { result } = renderHook(() =>
      useLocalStorage(testKey, SiteTheme.SILVER, "")
    );

    expect(result.current[0]).toBe(SiteTheme.SILVER);
    act(() => result.current[1](SiteTheme.CLASSIC));
    expect(result.current[0]).toBe(SiteTheme.SILVER);
  });

  it("useNavLinksQuery returns proper the data", () => {
    const input = {
      markdownRemark: {
        frontmatter: { navLinks: mockNavLinks },
      },
    };

    mockUseStaticQuery.mockImplementationOnce(() => input);
    const { result } = renderHook(() => useNavLinksQuery<NavLinkItem[]>());

    expect(result.current).toEqual(mockNavLinks);
  });
});
