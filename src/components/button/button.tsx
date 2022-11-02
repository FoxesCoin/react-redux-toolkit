import styled from 'styled-components';

import { useClickEvent } from 'hooks/event';

import { COLORS } from 'styles/color';
import { ButtonTheme, BUTTON_THEME } from './button.constants';

import { RWrapper } from 'typings/react';

interface Props {
  onClick: () => void;

  styling?: ButtonTheme;
  isDisabled?: boolean;
}

const Wrapper = styled.button<{ styling?: ButtonTheme }>`
  line-height: 1.5;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;

  &:disabled {
    background-color: ${COLORS.dimGray};
  }

  ${(props) => (props.styling ? BUTTON_THEME[props.styling] : '')}
`;

export const Button: RWrapper<Props> = (props) => {
  const { children, className, isDisabled, styling, onClick } = props;

  const handleClick = useClickEvent(onClick);

  return (
    <Wrapper
      styling={styling}
      className={className}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  );
};
