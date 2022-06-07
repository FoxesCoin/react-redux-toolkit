import { useRef } from 'react';

export const useAutoHeightAnimation = <T extends HTMLElement>(
  isOpen: boolean
) => {
  const ref = useRef<T>(null);

  return [ref, isOpen ? ref.current?.offsetHeight ?? 0 : 0] as const;
};
