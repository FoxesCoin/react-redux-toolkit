import styled from 'styled-components';

import {
  cssFlexCenter,
  cssFullSize,
  cssHorizontalGap,
  cssText,
  cssVerticalGap,
  GapStyling,
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
  GapRow: styled.div<GapStyling>`
    ${showCursor}
    ${(props) => cssHorizontalGap(props?.gap)}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div<GapStyling>`
    ${showCursor}
    ${(props) => cssVerticalGap(props?.gap)}
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
  Input: styled.input`
    border-radius: 0.25rem;
    padding: 0.5rem;
  `,
};
