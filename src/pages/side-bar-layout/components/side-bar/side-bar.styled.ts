import styled from 'styled-components';

import { Picture } from 'components/picture';

import { COLORS } from 'styles/color';

export const SideBarStyled = {
  Wrapper: styled.nav<{ isOpenSidebar: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: width 0.5s;
    background-color: ${COLORS.darkBlue};
    width: ${(props) => (props.isOpenSidebar ? 200 : 64)}px;
    padding-bottom: 1rem;
  `,
  OpenIcon: styled(Picture)<{ isOpenSidebar: boolean }>`
    transform: rotate(${(props) => (props.isOpenSidebar ? 180 : 0)}deg);
    transition: 0.5s all;
  `,
};
