import { ChangeEvent } from 'react';

import { RElement } from 'typings/react';
import { InputBase, InputBaseProps } from './input-base';

interface Props
  extends Omit<InputBaseProps, 'onChange' | 'type' | 'pattern' | 'inputMode'> {
  onChange: (value: string) => void;
}

export const NumberInput: RElement<Props> = (props) => {
  const {
    value,
    isError,
    styling,
    className,
    isDisabled,
    placeholder,
    onChange,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { validity, value: newValue } = event.target;
    if (!validity.valid) {
      return;
    }
    onChange(newValue);
  };

  return (
    <InputBase
      type="text"
      inputMode="numeric"
      pattern="^-?\d*\.?\d*$"
      className={className}
      isError={isError}
      styling={styling}
      value={value}
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
