import { useChangeEvent } from 'hooks/event';
import { RElement } from 'typings/react';

import { SwitchStyled as Styled } from './switch.styled';

interface Props {
  isChecked: boolean;
  value: string;

  onChange: (isChecked: string) => void;

  isDisabled?: boolean;
}

export const Switch: RElement<Props> = (props) => {
  const { className, isChecked, isDisabled, value, onChange } = props;

  const handleChange = useChangeEvent(onChange);

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
        hidden
      />
      <Styled className={className} />
    </>
  );
};
