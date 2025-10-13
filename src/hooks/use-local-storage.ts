import { useCallback, useSyncExternalStore } from "react";

import type { UseLocalStorageResponse } from "../types";
import { getServerSnapshot } from "../utils";

function subscribe(cb: () => void): () => void {
  window?.addEventListener("storage", cb);
  return () => {
    window?.removeEventListener("storage", cb);
  };
}

export function useLocalStorage(
  key: string,
  defaultValue: string,
  defaultServerValue: string
): UseLocalStorageResponse {
  const valueFromLocalStorage = useCallback(() => {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const setValue = useCallback(
    (value: string) => {
      try {
        localStorage.setItem(key, value);
        window.dispatchEvent(new Event("storage"));
      } catch {
        return;
      }
    },
    [key]
  );

  const value = useSyncExternalStore(
    subscribe,
    valueFromLocalStorage,
    getServerSnapshot(defaultServerValue)
  );

  return [value, setValue];
}
