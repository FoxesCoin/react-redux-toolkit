import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useMoveRoute() {
  const navigate = useNavigate();

  const moveToRouteCallback = useCallback(
    (route: string) => () => {
      navigate(route);
    },
    []
  );

  const moveToRoute = useCallback((route: string) => {
    navigate(route);
  }, []);

  return { moveToRouteCallback, moveToRoute };
}
