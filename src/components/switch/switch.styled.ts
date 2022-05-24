import styled, { css } from 'styled-components';

import { COLORS } from 'styles/color';

import { Theme } from 'styles/theme';

interface Styled {
  isChecked: boolean;

  isDisabled?: boolean;
}

const CHECKBOX_WIDTH = 45;
const DOT_SIZE = 18;
const SIDE_PADDING = 4;
const RIGHT_PADDING = CHECKBOX_WIDTH - DOT_SIZE - SIDE_PADDING;

export const SwitchStyled = {
  Wrapper: styled.label<Styled>(
    ({ isChecked, isDisabled }) => css`
      display: flex;
      width: min-content;
      align-items: center;

      &:hover .switch::before {
        background-color: ${isChecked
          ? COLORS.starCommandBlue
          : COLORS.lightGray};
      }

      cursor: ${isDisabled ? 'default' : 'pointer'};
    `
  ),
  Item: styled(Theme.FlexCenter)<Styled>(
    ({ isChecked, isDisabled }) => css`
      margin: 0.25rem;
      position: relative;

      /* Background */
      &::before {
        content: '';
        transition: 0.5s all;
        width: ${CHECKBOX_WIDTH}px;
        height: 22px;
        border-radius: 11px;
        display: inline-block;
        background-color: ${isChecked
          ? isDisabled
            ? COLORS.charcoal
            : COLORS.starCommandBlue
          : COLORS.black};
      }

      /* Checkbox point */
      &::after {
        content: '';
        position: absolute;
        left: ${isChecked ? RIGHT_PADDING : SIDE_PADDING}px;
        transition: 0.5s all;
        width: ${DOT_SIZE}px;
        height: ${DOT_SIZE}px;
        border-radius: 50%;
        background-color: ${isDisabled ? COLORS.lightGray : COLORS.white};
        box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
      }
    `
  ),

  Switch: styled.input`
    display: none;
  `,
};
