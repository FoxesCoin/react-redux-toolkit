import { Outlet } from 'react-router';

import { SidebarLink } from './components';

import { SIDEBAR_LINKS } from './side-bar.constants';

import { RPage } from 'types/react';

import { SideBarStyles as Styled } from './side-bar.styles';
import { useToggleState } from 'services/hooks';

export const SideBar: RPage = () => {
  const [isOpenSidebar, toggleOpenSidebar] = useToggleState();
  return (
    <Styled.Wrapper>
      <Styled.Sidebar isOpenSidebar={isOpenSidebar}>
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.text} {...item} />
        ))}

        <button onClick={toggleOpenSidebar}>Test</button>
      </Styled.Sidebar>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </Styled.Wrapper>
  );
};
