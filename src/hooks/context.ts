import { Context, useContext } from 'react';

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
