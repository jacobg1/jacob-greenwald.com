import { useCallback, useSyncExternalStore } from "react";

function subscribe(cb: () => void): () => void {
  window?.addEventListener("storage", cb);
  return () => {
    window?.removeEventListener("storage", cb);
  };
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
  const valueFromLocalStorage = useCallback(() => {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const valueFromServer = useCallback(
    () => defaultServerValue,
    [defaultServerValue]
  );

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
    valueFromServer
  );

  return [value, setValue];
}
