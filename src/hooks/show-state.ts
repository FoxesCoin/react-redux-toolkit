import { useCallback, useState } from 'react';

export function useShowState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const onShow = useCallback(() => {
    setShow(true);
  }, []);

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const onToggle = useCallback(() => {
    setShow((current) => !current);
  }, []);

  return {
    isShow,
    onShow,
    onClose,
    onToggle,
  };
}

export function useToggleState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const onToggle = useCallback(() => setShow((current) => !current), []);

  return [isShow, onToggle] as const;
}
