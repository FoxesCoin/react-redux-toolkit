import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { useTabApi, useTabState } from '../tab.context';

import { handleClickEvent } from 'services/utils';

interface Props {
  value: string;

  className?: string;

  children?: ReactNode | ((isActive: boolean) => ReactNode);
}

interface WrapperParams {
  isActive: boolean;
}

const Wrapper = styled.button<WrapperParams>`
  transition: 0.15s all;
`;

export const TabHeader: FC<Props> = (props) => {
  const { className, value, children } = props;
  const item = useTabState();
  const setItem = useTabApi();

  const isActive = item === value;

  const handleClick = handleClickEvent(() => {
    setItem(value);
  });

  const render = () => {
    if (!children) {
      return null;
    }
    return typeof children === 'function' ? children(isActive) : children;
  };

  return (
    <Wrapper
      className={`${className} ${isActive ? 'tab__active' : ''}`}
      isActive={isActive}
      onClick={handleClick}
    >
      {render()}
    </Wrapper>
  );
};
