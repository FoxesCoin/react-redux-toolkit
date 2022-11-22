import styled from 'styled-components';

import { useChangeEvent } from 'hooks/event';

import { InputStyled, INPUT_STYLED } from './input-base/input-base.constants';

import { RElement } from 'typings/react';

interface Styled {
  styling?: InputStyled;
}

export interface TextAreaProps extends Styled {
  value: string | undefined;

  onChange: (value: string) => void;

  placeholder?: string;
  isDisabled?: boolean;
}

const Wrapper = styled.textarea<Styled>`
  resize: none;
  width: 100%;
  padding: 12px;
  border: 1px solid;

  ${(props) => (props.styling ? INPUT_STYLED[props.styling] : '')}
`;

export const TextArea: RElement<TextAreaProps> = (props) => {
  const { styling, value, className, isDisabled, placeholder, onChange } =
    props;

  const handleChange = useChangeEvent(onChange);

  return (
    <Wrapper
      onChange={handleChange}
      styling={styling}
      value={value}
      className={className}
      disabled={isDisabled}
      placeholder={placeholder}
    />
  );
};
