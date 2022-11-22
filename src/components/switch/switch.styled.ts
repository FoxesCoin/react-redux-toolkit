import styled from 'styled-components';

import { COLORS } from 'styles/color';
import { cssVerticalCentralize } from 'styles/theme';

const CHECKBOX_WIDTH = 45;
const DOT_SIZE = 18;
const SIDE_PADDING = 4;
const RIGHT_PADDING = CHECKBOX_WIDTH - DOT_SIZE - SIDE_PADDING;

export const SwitchStyled = styled.div`
  position: relative;
  display: inline-block;

  height: 22px;
  width: 45px;
  border-radius: 11px;

  transition: 0.3s all;

  background-color: ${COLORS.lightCoral};

  /* Checkbox point */
  &::after {
    content: '';
    position: absolute;
    left: ${SIDE_PADDING}px;

    transition: 0.5s all;
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: 50%;
    ${cssVerticalCentralize}
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
  }

  // When checkbox is checked
  input:checked ~ & {
    background-color: ${COLORS.lightGreen};

    &::after {
      left: ${RIGHT_PADDING}px;
    }
  }

  // When checkbox is disabled
  input:disabled ~ & {
    background-color: ${COLORS.black};

    &::after {
      background-color: ${COLORS.lightGray};
    }
  }
`;
