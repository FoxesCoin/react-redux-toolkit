import { ChangeEventHandler } from 'react';
import { RContainer } from 'types/react';

import { RadioStyles as Styled } from './radio.styles';

interface Props {
  isChecked: boolean;
  value: any;

  onCheck: (isChecked: any) => void;

  isDisabled?: boolean;
}

export const Radio: RContainer<Props> = (props) => {
  const { isChecked, onCheck, value, children, className, isDisabled } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onCheck(event.target.value);
  };

  return (
    <Styled.Wrapper className={className} isDisabled={isDisabled}>
      <Styled.Radio
        type="checkbox"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
      />
      <Styled.Item>
        <Styled.Dot isChecked={isChecked} />
      </Styled.Item>
      {children ?? value}
    </Styled.Wrapper>
  );
};
