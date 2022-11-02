import { SidebarLink } from '../sidebar-link';

import { useToggleState } from 'hooks/show-state';

import { SIDEBAR_LINKS } from './side-bar.constants';

import { RPage } from 'typings/react';

import { Theme } from 'styles/theme';
import { SideBarStyled as Styled } from './side-bar.styled';

export const SideBar: RPage = () => {
  const [isOpenSidebar, toggleOpenSidebar] = useToggleState();

  return (
    <Styled.Wrapper isOpenSidebar={isOpenSidebar}>
      <Theme.GapColumn>
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.text} {...item} />
        ))}
      </Theme.GapColumn>
      <Theme.FlexCenter onClick={toggleOpenSidebar}>
        <Styled.OpenIcon
          size={32}
          isOpenSidebar={isOpenSidebar}
          src="openArrow"
        />
      </Theme.FlexCenter>
    </Styled.Wrapper>
  );
};
