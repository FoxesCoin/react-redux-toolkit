import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles/color';
import { RElement } from 'typings/react';
import { InputStyled, INPUT_STYLED } from './input-base.constants';

interface Styled {
  styling?: InputStyled;
}

export interface InputBaseProps extends Styled {
  value: string | undefined;

  onChange: ChangeEventHandler<HTMLInputElement>;

  isError?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  pattern?: string;
  inputMode?: 'numeric';
}

const Field = styled.input<Styled>`
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;

  &::placeholder {
    color: ${COLORS.spanishGray};
  }

  &:disabled {
    cursor: no-drop;
  }

  &.field__error {
    &,
    &::placeholder {
      color: ${COLORS.lightCoral};
    }

    background-color: ${COLORS.palePink} !important;
  }

  ${(props) => (props.styling ? INPUT_STYLED[props.styling] : '')}
`;

export const InputBase: RElement<InputBaseProps> = (props) => {
  const {
    type = 'text',
    value,
    styling,
    isError,
    pattern,
    inputMode,
    className,
    isDisabled,
    placeholder,
    onChange,
  } = props;

  return (
    <Field
      type={type}
      value={value}
      pattern={pattern}
      disabled={isDisabled}
      className={`${className} ${isError ? 'field__error' : ''}`}
      placeholder={placeholder}
      styling={styling}
      inputMode={inputMode}
      onChange={onChange}
    />
  );
};
