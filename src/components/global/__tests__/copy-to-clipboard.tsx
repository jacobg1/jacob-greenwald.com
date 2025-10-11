import * as React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { getClipboardValue } from "../../../../__utils__";
import { CopyToClipboard } from "../copy-to-clipboard";

const testValue = "test value";

describe("copy to clipboard", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("copies value on click", async () => {
    const user = userEvent.setup();

    const { getByTestId, queryByTestId } = render(
      <CopyToClipboard isMobileHeader={false} value={testValue} />
    );

    await user.click(getByTestId("ContentCopyIcon"));

    expect(getByTestId("LibraryAddCheckIcon")).toBeInTheDocument();
    expect(queryByTestId("ContentCopyIcon")).toBeNull();
    expect(await getClipboardValue(navigator)).toBe(testValue);
  });

  it("clears value on clicking twice", async () => {
    const user = userEvent.setup();

    const { getByTestId } = render(
      <CopyToClipboard isMobileHeader={true} value={testValue} />
    );

    await user.click(getByTestId("ContentCopyIcon"));
    expect(await getClipboardValue(navigator)).toBe(testValue);

    await user.click(getByTestId("LibraryAddCheckIcon"));
    expect(await getClipboardValue(navigator)).toBe("");
  });

  it("error is caught properly if writeText fails", async () => {
    const user = userEvent.setup();

    jest.spyOn(console, "error").mockImplementation(() => {});
    const mockWriteText = jest.spyOn(navigator.clipboard, "writeText");

    mockWriteText.mockImplementation(() => {
      throw new Error("writeText failed");
    });

    const { getByTestId } = render(
      <CopyToClipboard isMobileHeader={false} value={testValue} />
    );

    await user.click(getByTestId("ContentCopyIcon"));

    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenNthCalledWith(
      1,
      new Error("Failed to copy value")
    );
  });
});
