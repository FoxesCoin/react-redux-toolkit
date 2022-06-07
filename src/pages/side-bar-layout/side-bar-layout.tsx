import { Outlet } from 'react-router';

import { RPage } from 'types/react';
import { SideBar } from './components';

import { SideBarLayoutStyles as Styled } from './side-bar-layout.styles';

export const SideBarLayout: RPage = () => (
  <Styled.Wrapper>
    <SideBar />
    <Styled.Main>
      <Outlet />
    </Styled.Main>
  </Styled.Wrapper>
);
