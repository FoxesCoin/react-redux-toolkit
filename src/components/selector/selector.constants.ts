import { css } from 'styled-components';
import { COLORS } from 'styles/color';

const DARK_ORANGE = css`
  & .selector {
    color: ${COLORS.white};

    &__header,
    &__menu {
      max-width: 20rem;
      border: 1px solid ${COLORS.white};
      border-radius: 0.25rem;
      background-color: ${COLORS.backgroundBlue};
    }

    &__header {
      padding: 0.5rem;
    }

    &__item {
      padding: 0.125rem 2rem;

      &:first-child {
        border-radius: 0.2rem 0.2rem 0 0;
      }
      &:last-child {
        border-radius: 0 0 0.2rem 0.2rem;
      }

      &:hover:not(.selector__item_active) {
        background-color: ${COLORS.orangeOpacity};
      }

      &_active {
        background-color: ${COLORS.orange};
      }
    }
  }
`;

export const SELECTOR_THEME = {
  'dark-orange': DARK_ORANGE,
};

export type SelectorTheme = keyof typeof SELECTOR_THEME;
