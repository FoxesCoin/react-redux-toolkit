import { css } from 'styled-components';

import { COLORS } from 'styles/color';

const BLACK = css`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

const WHITE = css`
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

const GREEN = css`
  color: ${COLORS.white};
  font-weight: bold;
  background-color: ${COLORS.darkGreen};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

const RED = css`
  color: ${COLORS.white};
  font-weight: bold;
  background-color: ${COLORS.red};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

export const BUTTON_THEME = <const>{
  white: WHITE,
  black: BLACK,
  green: GREEN,
  red: RED,
};

export type ButtonTheme = keyof typeof BUTTON_THEME;
