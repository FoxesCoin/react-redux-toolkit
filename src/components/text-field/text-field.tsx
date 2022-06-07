import styled from 'styled-components';

import { useChangeEvent } from 'services/hooks';

import { COLORS } from 'styles/color';
import { TEXT_FIELD_THEME, TextFieldTheme } from './text-field.constants';

import { RContainer } from 'types/react';

interface Styled {
  styling?: TextFieldTheme;
}

interface Props extends Styled {
  value: string | undefined;

  onChange: (value: string) => void;

  isError?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
}

const Field = styled.input<Styled>`
  border: 2px solid;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;

  &::placeholder {
    color: ${COLORS.spanishGray};
  }

  ${(props) => (props.styling ? TEXT_FIELD_THEME[props.styling] : '')}
`;

export const TextField: RContainer<Props> = (props) => {
  const {
    value,
    styling,
    isError,
    children,
    className,
    isDisabled,
    placeholder,
    onChange,
  } = props;

  const handleChange = useChangeEvent(onChange);

  return (
    <Field
      type="text"
      contentEditable={false}
      value={value}
      disabled={isDisabled}
      className={`${className} ${isError ? 'field__error' : ''}`}
      placeholder={placeholder}
      styling={styling}
      onChange={handleChange}
    >
      {children}
    </Field>
  );
};
