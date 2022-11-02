import styled from 'styled-components';

import { useChangeEvent } from 'hooks/event';

import {
  TextFieldTheme,
  TEXT_FIELD_THEME,
} from './text-field/text-field.constants';

import { RElement } from 'typings/react';

export interface TextAreaProps {
  value: string | undefined;

  onChange: (value: string) => void;

  styling?: TextFieldTheme;
  placeholder?: string;
  isDisabled?: boolean;
}

const Wrapper = styled.textarea<{ styling?: TextFieldTheme }>`
  resize: none;
  width: 100%;
  padding: 12px;
  border: 1px solid;

  ${(props) => (props.styling ? TEXT_FIELD_THEME[props.styling] : '')}
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
