import { Context, createContext, useContext } from 'react';

export const generateContext = <T extends any>(displayName: string) => {
  const context = createContext<T | null>(null);
  context.displayName = displayName;

  return context;
};

export const useContextHandler = <T extends any>(
  context: Context<T>,
  errorTitle: string
): NonNullable<T> => {
  const data = useContext(context);
  if (data === null) {
    throw new Error(
      `${errorTitle}.Context must be used with ${errorTitle}.Provider!`
    );
  }
  return data as NonNullable<T>;
};
