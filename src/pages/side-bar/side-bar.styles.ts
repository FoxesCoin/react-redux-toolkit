import styled from 'styled-components';

import { COLORS } from 'styles/color';

export const SideBarStyles = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
  `,
  Sidebar: styled.nav<{ isOpenSidebar: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.darkBlue};
    width: ${(props) => (props.isOpenSidebar ? 200 : 64)}px;
    transition: 0.5s all;
  `,
  Main: styled.main`
    padding: 2rem 2.5rem;
    color: ${COLORS.white};
    background-color: ${COLORS.backgroundBlue};
  `,
};
