import { FC, ReactNode, useMemo } from 'react';
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

const Wrapper = styled.div<WrapperParams>`
  transition: 0.15s all;
  cursor: pointer;
`;

export const TabHeader: FC<Props> = (props) => {
  const { className, value, children } = props;
  const activeValue = useTabState();
  const setItem = useTabApi();

  const isActive = useMemo(() => activeValue === value, [activeValue, value]);

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
      className={`${isActive ? 'tab_active' : ''} ${className}`}
      isActive={isActive}
      onClick={handleClick}
    >
      {render()}
    </Wrapper>
  );
};
