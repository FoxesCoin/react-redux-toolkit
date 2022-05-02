import styled from 'styled-components';

import { handleClickEvent } from 'services/utils';

import { BUTTON_THEME, ButtonTheme } from './button.constants';
import { COLORS } from 'styles/color';

import { RWrapper } from 'types/react';

interface Props {
  onClick: () => void;

  styling?: ButtonTheme;
  isDisabled?: boolean;
}

const Wrapper = styled.button<{ styling?: ButtonTheme }>`
  line-height: 1.5;
  transition: all 0.3s;

  &:disabled {
    background-color: ${COLORS.dimGray};
  }

  ${(props) => (props.styling ? BUTTON_THEME[props.styling] : '')}
`;

export const Button: RWrapper<Props> = (props) => {
  const { children, className, isDisabled, styling, onClick } = props;

  return (
    <Wrapper
      styling={styling}
      className={className}
      disabled={isDisabled}
      onClick={handleClickEvent(onClick)}
    >
      {children}
    </Wrapper>
  );
};
