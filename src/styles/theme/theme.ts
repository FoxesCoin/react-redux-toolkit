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
  Title: styled.p<Typography>`
    ${showCursor}
    ${cssText}
    text-align: center;
    width: 100%;
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
  FullScreenCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
    ${cssFullSize}
    flex-direction: column;
  `,
};
