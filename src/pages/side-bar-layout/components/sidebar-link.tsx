import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Picture, PictureName } from 'components/picture';

import { COLORS } from 'styles/color';

import { RElement } from 'types/react';
import { Theme } from 'styles/theme';
import { memo } from 'react';

export interface SidebarLinkProps {
  to: string;
  text: string;
  icon: PictureName;
}

const Item = styled(NavLink)`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
  width: 100%;
  transition: all 0.25s;
  color: ${COLORS.white};

  overflow: hidden;
  white-space: nowrap;

  &.active {
    color: ${COLORS.yellow};
  }

  img {
    flex: 0 0 auto;
  }

  &:hover {
    background-color: ${COLORS.opacityOnyx};
  }
`;

export const SidebarLink: RElement<SidebarLinkProps> = memo((props) => {
  const { to, icon, text } = props;

  return (
    <Item to={to}>
      <Picture alt={text} src={icon} />
      <Theme.Text>{text}</Theme.Text>
    </Item>
  );
});
SidebarLink.displayName = 'SidebarLink';
