import { css } from 'styled-components';

import { COLORS } from 'styles/color';

const WHITE = css`
  color: ${COLORS.black};
  background-color: ${COLORS.white};

  &:disabled {
    color: ${COLORS.spanishGray};
    background-color: ${COLORS.cultured};
  }
`;

const DARK = css`
  color: ${COLORS.white};
  background-color: ${COLORS.black};

  &:disabled {
    color: ${COLORS.spanishGray};
    background-color: ${COLORS.onyxOpacity};
  }
`;

export const INPUT_STYLED = {
  white: WHITE,
  dark: DARK,
};

export type InputStyled = keyof typeof INPUT_STYLED;
