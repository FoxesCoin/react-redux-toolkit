import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';

// useEvent pull request https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md

export const useEvent = <T extends (...args: any[]) => any>(handler: T) => {
  const handlerRef = useRef<T>(null);

  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    (handlerRef.current as any) = handler;
  });

  return useCallback((...args: Parameters<T>) => {
    // In a real implementation, this would throw if called during render
    const func = handlerRef.current;
    if (func) {
      func(...args);
    }
  }, []);
};

export const useClickEvent = (onClick: () => void) =>
  useEvent((event: MouseEvent<any>) => {
    onClick();

    event.preventDefault();
    event.stopPropagation();
    return;
  });

export const useChangeEvent = (onChange: (value: string) => void) =>
  useEvent((event: ChangeEvent<any>) => {
    const value = event.target.value;
    onChange(value);
  });
