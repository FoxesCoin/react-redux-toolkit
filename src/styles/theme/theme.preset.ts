import { css } from 'styled-components';

import { Color, COLORS } from 'styles/color';
import { FontSize, FONT_SIZES } from 'styles/font-size';

export interface GapStyling {
  gap?: string;
}

export interface Typography {
  color?: Color;
  fontSize?: FontSize;
}

export const cssHorizontalGap = (gap?: string) => css`
  & > * + * {
    margin-left: ${gap ?? '8px'};
  }
`;

export const cssVerticalGap = (gap?: string) => css`
  & > * + * {
    margin-top: ${gap ?? '8px'};
  }
`;

export const cssText = css<Typography>(
  ({ color, fontSize }) => `
  ${color ? `color: ${COLORS[color]};` : ''}
  ${fontSize ? `font-size: ${FONT_SIZES[fontSize]};` : ''}
  `
);

export const cssVerticalCentralize = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const cssAbsoluteCentralize = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssFullSizeAbsolute = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
`;

export const cssFullScreenFixed = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
`;

export const cssSquare = (size: string) => css`
  width: ${size};
  height: ${size};
`;

export const cssRound = (size: string) => css`
  ${cssSquare(size)}
  border-radius: 50%;
`;

export const cssHideScrollbar = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
