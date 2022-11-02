import { Outlet } from 'react-router';

import { SideBar } from './components';

import { RPage } from 'typings/react';

import { SideBarLayoutStyles as Styled } from './side-bar-layout.styles';

export const SideBarLayout: RPage = () => (
  <Styled.Wrapper>
    <SideBar />
    <Styled.Main>
      <Outlet />
    </Styled.Main>
  </Styled.Wrapper>
);
