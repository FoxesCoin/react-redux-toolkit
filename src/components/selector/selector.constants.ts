import { css } from 'styled-components';
import { COLORS } from 'styles/color';

const BORDER_RADIUS = '0.25rem';

const DARK_ORANGE = css`
  & .selector {
    color: ${COLORS.white};

    &__header,
    &__menu {
      max-width: 20rem;
      border: 1.5px solid ${COLORS.white};
      border-radius: ${BORDER_RADIUS};
      background-color: ${COLORS.backgroundBlue};
    }

    &__header {
      padding: 0.5rem;
    }

    &__item {
      padding: 0.125rem 2rem;

      &:first-child {
        border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
      }
      &:last-child {
        border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
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
