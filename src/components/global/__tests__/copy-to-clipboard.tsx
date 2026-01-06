import * as React from "react";

import { render, screen } from "@testing-library/react";
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

    render(<CopyToClipboard isMobileHeader={false} value={testValue} />);

    await user.click(screen.getByTestId("ContentCopyIcon"));

    expect(screen.getByTestId("LibraryAddCheckIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("ContentCopyIcon")).toBeNull();
    expect(await getClipboardValue(navigator)).toBe(testValue);
  });

  it("clears value on clicking twice", async () => {
    const user = userEvent.setup();

    render(<CopyToClipboard isMobileHeader={true} value={testValue} />);

    await user.click(screen.getByTestId("ContentCopyIcon"));
    expect(await getClipboardValue(navigator)).toBe(testValue);

    await user.click(screen.getByTestId("LibraryAddCheckIcon"));
    expect(await getClipboardValue(navigator)).toBe("");
  });

  it("error is caught properly if writeText fails", async () => {
    const user = userEvent.setup();

    jest.spyOn(console, "error").mockImplementation(() => {});
    const mockWriteText = jest.spyOn(navigator.clipboard, "writeText");

    mockWriteText.mockImplementation(() => {
      throw new Error("writeText failed");
    });

    render(<CopyToClipboard isMobileHeader={false} value={testValue} />);

    await user.click(screen.getByTestId("ContentCopyIcon"));

    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(Error("Failed to copy value"));
  });
});
