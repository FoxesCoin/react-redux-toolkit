import styled from 'styled-components';

import { COLORS } from 'styles/color';

import { cssRound, Theme } from 'styles/theme';

export const RadioStyles = styled(Theme.FlexCenter)`
  display: inline-flex;
  margin: 0.25rem;
  padding: 0.25rem;
  border-radius: 50%;
  border: 2px solid ${COLORS.white};
  width: min-content;

  display: inline-block;

  &::after {
    content: '';
    display: block;
    ${cssRound('10px')}
    transition: 0.25s all;
    background-color: ${COLORS.transparent};
  }

  // When checkbox is checked
  input:checked ~ & {
    &::after {
      background-color: ${COLORS.white};
    }
  }
`;
