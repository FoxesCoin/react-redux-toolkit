import styled from 'styled-components';

import {
  cssFlexCenter,
  cssFullSize,
  cssGap,
  cssText,
  Typography,
} from './theme.preset';

const showCursor = (props: any) => (props.onClick ? 'cursor: pointer;' : '');

export const Theme = {
  Paragraph: styled.p<Typography>`
    ${showCursor}
    ${cssText}
  `,
  Text: styled.span<Typography>`
    ${showCursor}
    ${cssText}
  `,
  UpperText: styled.span<Typography>`
    ${showCursor}
    ${cssText}
    text-transform: uppercase;
  `,
  Title: styled.p<Typography>`
    ${showCursor}
    ${cssText}
    text-align: center;
    width: 100%;
  `,
  FullScreenCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
    ${cssFullSize}
    flex-direction: column;
  `,
  FlexLine: styled.div`
    ${showCursor}
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  FlexColumn: styled.div`
    ${showCursor}
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  GapRow: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  FlexCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
  `,
  FlexColumnCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
    flex-direction: column;
  `,
  FullScreen: styled.div`
    ${showCursor}
    ${cssFullSize}
  `,
  GridColumn: styled.div<{ gap?: number }>`
    ${showCursor}
    display: grid;
    gap: ${(props) => props.gap ?? 8}px;
    grid-auto-rows: max-content;
    justify-items: center;
    align-items: center;
  `,
  ToggleContent: styled.div`
    ${showCursor}
    overflow: hidden;
    transition: all 0.5s;
  `,
  AllSpace: styled.div`
    ${showCursor}
    width: 100%;
    height: 100%;
  `,
};
