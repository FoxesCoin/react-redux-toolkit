import styled from 'styled-components';

import { COLORS } from 'styles/color';

export const SideBarLayoutStyles = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
  `,
  Main: styled.main`
    padding: 2rem 2.5rem;
    color: ${COLORS.white};
    background-color: ${COLORS.backgroundBlue};
  `,
};
