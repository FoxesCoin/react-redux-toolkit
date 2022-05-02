import { useNavigate } from 'react-router-dom';

export function useMoveRoute() {
  const navigate = useNavigate();

  const moveToRouteCallback = (route: string) => () => {
    navigate(route);
  };

  const moveToRoute = (route: string) => {
    navigate(route);
  };

  return { moveToRouteCallback, moveToRoute };
}
