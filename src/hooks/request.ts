import { useState } from 'react';

type Function = (...args: any[]) => Promise<any>;

export function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRequest = async (callback: () => Promise<void>) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await callback();
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const wrappedRequest =
    <F extends Function>(request: F) =>
    (...args: Parameters<F>) =>
      sendRequest(() => request(...args));

  const callbackWrappedRequest =
    <F extends Function>(request: F) =>
    (...args: Parameters<F>) =>
    () =>
      sendRequest(() => request(...args));

  const callbackRequest = (callback: () => Promise<void>) => () =>
    sendRequest(callback);

  return {
    isError,
    isLoading,
    sendRequest,
    wrappedRequest,
    callbackRequest,
    callbackWrappedRequest,
  };
}
