import { Outlet } from 'react-router';

import { ROUTES } from 'constants/router';

import { SidebarLink } from './components';

import { RPage } from 'types/react';

import { HomeStyles as Styled } from './home.styles';

export const Home: RPage = () => (
  <Styled.Wrapper>
    <Styled.Sidebar>
      <SidebarLink to={ROUTES.BUTTON}>Button</SidebarLink>
      <SidebarLink to={ROUTES.INPUT}>Input</SidebarLink>
      <SidebarLink to={ROUTES.SELECTOR}>Selector</SidebarLink>
      <SidebarLink to={ROUTES.CHECKBOX}>Checkbox</SidebarLink>
      <SidebarLink to={ROUTES.ACCORDION}>Accordion</SidebarLink>
    </Styled.Sidebar>
    <Styled.Main>
      <Outlet />
    </Styled.Main>
  </Styled.Wrapper>
);
