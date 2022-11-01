import { css } from 'styled-components';

import { COLORS } from 'styles/color';

const WHITE = css`
  color: ${COLORS.black};
  border-color: ${COLORS.white};
  background-color: ${COLORS.white};

  &:disabled {
    color: ${COLORS.spanishGray};
    background-color: ${COLORS.cultured};
    border-color: ${COLORS.spanishGray};
  }

  &.field__error {
    border-color: ${COLORS.lightCoral};
  }
`;

const DARK = css`
  color: ${COLORS.white};
  border-color: ${COLORS.white};
  background-color: ${COLORS.black};

  &:disabled {
    color: ${COLORS.spanishGray};
    background-color: ${COLORS.onyxOpacity};
    border-color: ${COLORS.spanishGray};
  }

  &.field__error {
    border-color: ${COLORS.lightCoral};
  }
`;

export const TEXT_FIELD_THEME = {
  white: WHITE,
  dark: DARK,
};

export type TextFieldTheme = keyof typeof TEXT_FIELD_THEME;
