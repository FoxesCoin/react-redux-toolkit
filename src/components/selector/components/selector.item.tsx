import styled from 'styled-components';
import { ReactNode } from 'react';

import { useSelectorApi } from '../selector.context';
import { useClickEvent } from 'hooks/event';

import { RContainer } from 'types/react';

interface Props {
  value: any;

  className?: string;

  children?: ReactNode | ((isSelected: boolean) => ReactNode);
}

const Wrapper = styled.li`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export const SelectorItem: RContainer<Props> = (props) => {
  const { value, className, children } = props;
  const { setValue, setOpen, checkEqual } = useSelectorApi();

  const isEqual = checkEqual(value);
  const componentClass = `${className ?? ''} selector__item ${
    isEqual ? 'selector__item_active' : ''
  }`.trim();

  const handleClick = useClickEvent(() => {
    setOpen(false);
    setValue(value);
  });

  const render = (): ReactNode => {
    if (!children) {
      return value;
    }
    return typeof children === 'function' ? children(isEqual) : children;
  };

  return (
    <Wrapper className={componentClass} onClick={handleClick}>
      {render()}
    </Wrapper>
  );
};
