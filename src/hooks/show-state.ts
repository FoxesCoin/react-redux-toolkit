import { useCallback, useState } from 'react';

export function useShowState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const show = useCallback(() => {
    setShow(true);
  }, []);

  const hide = useCallback(() => {
    setShow(false);
  }, []);

  const toggle = useCallback(() => {
    setShow((current) => !current);
  }, []);

  return { isShow, show, hide, toggle };
}

export function useToggleState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const toggle = useCallback(() => setShow((current) => !current), []);

  return [isShow, toggle] as const;
}
