import { ChangeEventHandler } from 'react';

import { SwitchStyled as Styled } from './switch.styled';

import { RContainer } from 'types/react';

interface Props {
  isChecked: boolean;
  value: any;

  onCheck: (isChecked: any) => void;

  isDisabled?: boolean;
}

export const Switch: RContainer<Props> = (props) => {
  const { className, isChecked, isDisabled, value, children, onCheck } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onCheck(event.target.value);
  };

  return (
    <Styled.Wrapper
      className={className}
      isChecked={isChecked}
      isDisabled={isDisabled}
    >
      <Styled.Switch
        type="checkbox"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
      />
      <Styled.Item
        className="switch"
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      {children ?? value}
    </Styled.Wrapper>
  );
};
