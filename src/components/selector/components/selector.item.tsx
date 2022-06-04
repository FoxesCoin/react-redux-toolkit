import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';

import { useSelectorApi, useSelectorState } from '../selector.context';

import { COLORS } from 'styles/color';

import { RContainer } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  value: any;

  className?: string;

  children?: ReactNode | ((isSelected: boolean) => ReactNode);
}

const Item = styled(Theme.FlexCenter)`
  color: ${COLORS.spanishGray};
`;

export const SelectorItem: RContainer<Props> = (props) => {
  const { value, className, children } = props;
  const { setValue, setOpen, checkEqual } = useSelectorApi();
  const { value: selectorValue } = useSelectorState();

  const isChecked = useMemo(() => checkEqual(value), [selectorValue]);

  const handleClick = () => {
    setOpen(false);
    setValue(value);
  };

  const render = (): ReactNode => {
    if (!children) {
      return value;
    }
    return typeof children === 'function' ? children(isChecked) : children;
  };

  return (
    <Item
      className={`${isChecked ? 'selector_active' : ''} ${className}`}
      onClick={handleClick}
    >
      {render()}
    </Item>
  );
};
