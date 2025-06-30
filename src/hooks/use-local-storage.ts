import { useSyncExternalStore } from "react";

import { SITE_THEME_KEY } from "../types";

function valueFromLocalStorage(
  key: string,
  defaultValue: string
): () => string {
  return () => {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch {
      return defaultValue;
    }
  };
}

function valueFromServer(defaultServerValue: string): () => string {
  return () => defaultServerValue;
}

function subscribeToLocalStorage(cb: () => void): () => void {
  window?.addEventListener("storage", cb);
  return () => {
    window?.removeEventListener("storage", cb);
  };
}

function setValue(value: string): void {
  try {
    localStorage.setItem(SITE_THEME_KEY, value);
    window.dispatchEvent(new Event("storage"));
  } catch {
    return;
  }
}

type UseLocalStorageResponse = [
  value: string,
  setValue: (value: string) => void,
];

export function useLocalStorage(
  key: string,
  defaultValue: string,
  defaultServerValue: string
): UseLocalStorageResponse {
  const value = useSyncExternalStore(
    subscribeToLocalStorage,
    valueFromLocalStorage(key, defaultValue),
    valueFromServer(defaultServerValue)
  );
  return [value, setValue];
}
