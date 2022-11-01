import styled, { css } from 'styled-components';

import { Color, COLORS } from 'styles/color';
import { cssRound } from 'styles/theme';

import { RElement } from 'types/react';

interface Props {
  size: number;

  color?: Color;
  lineHeight?: number;
}

interface Styled {
  size: number;
  color: Color;

  lineHeight?: number;
}

const Wrapper = styled.div<Styled>(
  ({ color, size, lineHeight }) => css`
    @keyframes spine {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: spine 1s infinite linear;

    ${cssRound(size)}

    border: ${lineHeight ?? size * 0.2}px solid ${COLORS[color]};
    border-top-color: ${COLORS[color]};
  `
);

export const Spinner: RElement<Props> = (props) => {
  const { size, className, color = 'black', lineHeight } = props;

  return (
    <Wrapper
      size={size}
      className={className}
      color={color}
      lineHeight={lineHeight}
    />
  );
};
