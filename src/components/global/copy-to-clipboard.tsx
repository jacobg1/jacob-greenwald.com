import React, { useState, useCallback } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import type { SxProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import type { CopyToClipboardProps } from "../../types";

const iconStyles: SxProps = {
  fontSize: "inherit",
  marginLeft: "7px",
  marginBottom: "2px",
  cursor: "pointer",
};

export function CopyToClipboard({
  isMobileHeader,
  value,
}: CopyToClipboardProps): JSX.Element | null {
  const [copied, setCopied] = useState(false);

  const copyValue = useCallback((valueToCopy: string) => {
    const handleCopyValue = async (): Promise<void> => {
      try {
        await navigator.clipboard.writeText(valueToCopy);
        setCopied(!!valueToCopy);
      } catch {
        throw new Error("Failed to copy value");
      }
    };
    handleCopyValue().catch(console.error);
  }, []);

  if (copied) {
    return (
      <LibraryAddCheckIcon sx={iconStyles} onClick={() => copyValue("")} />
    );
  }

  return (
    <Tooltip
      title="Copy"
      enterDelay={250}
      placement={isMobileHeader ? "top" : "right"}
    >
      <ContentCopyIcon sx={iconStyles} onClick={() => copyValue(value)} />
    </Tooltip>
  );
}
