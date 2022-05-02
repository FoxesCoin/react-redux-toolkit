import { COLORS } from 'styles/color';
import styled from 'styled-components';

export const HomeStyles = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
  `,
  Sidebar: styled.nav`
    background-color: ${COLORS.darkBlue};
  `,
  Main: styled.main`
    padding: 2rem 2.5rem;
    color: ${COLORS.white};
    background-color: ${COLORS.backgroundBlue};
  `,
};
