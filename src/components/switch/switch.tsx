import { useChangeEvent } from 'hooks/event';

import { RContainer } from 'typings/react';

import { SwitchStyled as Styled } from './switch.styled';

interface Props {
  isChecked: boolean;
  value: any;

  onCheck: (isChecked: any) => void;

  isDisabled?: boolean;
}

// TODO simplify this component to only ui switch without input connection

export const Switch: RContainer<Props> = (props) => {
  const { className, isChecked, isDisabled, value, children, onCheck } = props;

  const handleChange = useChangeEvent(onCheck);

  return (
    <Styled.Wrapper
      className={`${className} switch`}
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
        className="switch__item"
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      {children ?? value}
    </Styled.Wrapper>
  );
};
