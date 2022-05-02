import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from 'styles/color';

import { RWrapper } from 'types/react';

interface Props {
  to: string;
}

const Item = styled(NavLink)`
  padding: 0.75rem 1.25rem 0.75rem 1rem;
  display: block;
  transition: all 0.25s;
  color: ${COLORS.white};

  &.active {
    color: ${COLORS.yellow};
  }

  &:hover {
    background-color: ${COLORS.opacityOnyx};
  }
`;

export const SidebarLink: RWrapper<Props> = (props) => {
  const { to, children } = props;

  return <Item to={to}>{children}</Item>;
};
