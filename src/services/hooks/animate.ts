import { useRef } from 'react';

// NOTES:
// Height 0 ignore padding and margin and its will still show.
// If add padding or margin for children it will work

export const useAutoHeightAnimation = <T extends HTMLElement>(
  isOpen: boolean
) => {
  const ref = useRef<T>(null);

  return [ref, isOpen ? ref.current?.scrollHeight ?? 0 : 0] as const;
};
