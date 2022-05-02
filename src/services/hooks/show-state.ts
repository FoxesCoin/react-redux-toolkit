import { useCallback, useState } from 'react';

export function useShowState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const onShow = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const onToggle = () => {
    setShow(!isShow);
  };

  return {
    isShow,
    onShow,
    onClose,
    onToggle,
  };
}

export function useToggleState(initState = false) {
  const [isShow, setShow] = useState(initState);

  const onToggle = useCallback(() => setShow((state) => !state), []);

  return [isShow, onToggle] as const;
}
