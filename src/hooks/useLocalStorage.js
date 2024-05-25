import { useEffect, useState } from "react";

const useLocalStorage = (key, value, force) => {
  const [localValue, setLocalValue] = useState(() => {
    if (force && value) return value;

    const lclStrValue = localStorage.getItem(key);
    if (lclStrValue) return JSON.parse(lclStrValue);

    if (value) return value;

    return "";
  });

  useEffect(() => {
    if (localValue) {
      localStorage.setItem(
        key,
        typeof localValue !== "string" ? JSON.stringify(localValue) : localValue
      );
    }
  }, [localValue, key]);

  return [localValue, setLocalValue];
};

export default useLocalStorage;
