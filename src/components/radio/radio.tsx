import { useChangeEvent } from 'hooks/event';

import { RElement } from 'typings/react';

import { RadioStyles as Styled } from './radio.styles';

interface Props {
  isChecked: boolean;
  value: string;

  onCheck: (value: string) => void;

  isDisabled?: boolean;
}

export const Radio: RElement<Props> = (props) => {
  const { onCheck, isChecked, value, className, isDisabled } = props;

  const handleChange = useChangeEvent(onCheck);

  return (
    <>
      <input
        hidden
        type="checkbox"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
      />
      <Styled className={className} />
    </>
  );
};
