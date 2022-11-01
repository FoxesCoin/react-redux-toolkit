import { createContext } from 'react';

export const generateContext = <T extends any>(displayName: string) => {
  const context = createContext<T | null>(null);
  context.displayName = displayName;

  return context;
};
