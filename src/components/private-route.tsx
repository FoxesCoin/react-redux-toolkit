import { ReactNode } from 'react';
import { Navigate, Route } from 'react-router';

import { ROUTES } from 'constants/router';

import { RElement } from 'types/react';

interface Props {
  path: string;

  redirect?: string;
  element?: ReactNode | null;
}

export const PrivateRoute: RElement<Props> = (props) => {
  const { path, element, redirect = ROUTES.START } = props;
  const isCantOpenPrivateRoute = false;

  if (isCantOpenPrivateRoute) {
    return <Navigate to={redirect} />;
  }

  return <Route path={path} element={element} />;
};
