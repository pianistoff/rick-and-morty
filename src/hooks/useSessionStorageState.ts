import { useState, useEffect } from "react";

const useSessionStorageState = (
  defaultValue: any,
  sessionStorageKey: string,
): [any, (newValue: any) => void] => {
  const [value, setValue] = useState(() => {
    const sessionStorageItem = sessionStorage.getItem(sessionStorageKey);
    if (sessionStorageItem === null) return defaultValue;
    try {
      return JSON.parse(sessionStorageItem);
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
  }, [value, sessionStorageKey]);

  return [value, setValue];
};
export default useSessionStorageState;
