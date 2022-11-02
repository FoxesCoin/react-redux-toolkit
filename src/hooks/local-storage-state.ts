import { useState } from 'react';

type SetStateAction<S> = S | ((prevState: S) => S);

export const useLocalStorageState = <T>(key: string, initialValue?: T) => {
  const [storState, setStorState] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const updateState = (value: SetStateAction<T>) => {
    setStorState((currentState) => {
      const newValue = value instanceof Function ? value(currentState) : value;
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(error);
      }
      return newValue;
    });
  };

  return [storState, updateState] as const;
};
