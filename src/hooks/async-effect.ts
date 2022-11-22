import { useEffect } from 'react';

import { useRequest } from './request';

export function useAsyncEffect(
  callback: () => Promise<void>,
  dependency: unknown[] = []
) {
  const { isLoading, isError, sendRequest } = useRequest();

  useEffect(() => {
    sendRequest(callback);
  }, dependency);

  return { isLoading, isError };
}
