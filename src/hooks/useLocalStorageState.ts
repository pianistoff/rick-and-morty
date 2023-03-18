import { useState, useEffect } from "react";

const useLocalStorageState = (
  defaultValue: any,
  localStorageKey: string,
): [any, (newValue: any) => void] => {
  const [value, setValue] = useState(() => {
    const localStorageItem = localStorage.getItem(localStorageKey);
    if (localStorageItem === null) return defaultValue;
    try {
      return JSON.parse(localStorageItem);
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return [value, setValue];
};
export default useLocalStorageState;
