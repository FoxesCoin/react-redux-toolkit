import { useChangeEvent } from 'hooks/event';

import { RElement } from 'typings/react';
import { InputBase, InputBaseProps } from './input-base';

interface Props
  extends Omit<InputBaseProps, 'onChange' | 'type' | 'pattern' | 'inputMode'> {
  onChange: (value: string) => void;
}

export const TextField: RElement<Props> = (props) => {
  const {
    value,
    styling,
    isError,
    className,
    isDisabled,
    placeholder,
    onChange,
  } = props;

  const handleChange = useChangeEvent(onChange);

  return (
    <InputBase
      value={value}
      isDisabled={isDisabled}
      className={className}
      placeholder={placeholder}
      styling={styling}
      isError={isError}
      onChange={handleChange}
    />
  );
};
