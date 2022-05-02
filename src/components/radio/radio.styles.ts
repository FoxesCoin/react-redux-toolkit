import styled from 'styled-components';

import { COLORS } from 'styles/color';

import { cssRound, Theme } from 'styles/theme';

export const RadioStyles = {
  Wrapper: styled.label<{ isDisabled?: boolean }>`
    cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  `,
  Item: styled(Theme.FlexCenter)`
    display: inline-flex;
    margin: 0.25rem;
    padding: 0.25rem;
    border-radius: 50%;
    border: 1px solid ${COLORS.white};
  `,
  Dot: styled.div<{ isChecked: boolean }>`
    ${cssRound(10)}
    transition: 0.25s all;
    background-color: ${(props) =>
      props.isChecked ? COLORS.white : COLORS.transparent};
  `,

  Radio: styled.input`
    display: none;
  `,
};
