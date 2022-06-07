import { ReactNode } from 'react';
import styled from 'styled-components';

import { useSelectorApi } from '../selector.context';

import { COLORS } from 'styles/color';

import { RContainer } from 'types/react';

import { Theme } from 'styles/theme';
import { useClickEvent } from 'services/hooks';

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

  const handleClick = useClickEvent(() => {
    setOpen(false);
    setValue(value);
  });

  const render = (): ReactNode => {
    if (!children) {
      return value;
    }
    return typeof children === 'function'
      ? children(checkEqual(value))
      : children;
  };

  return (
    <Item className={className} onClick={handleClick}>
      {render()}
    </Item>
  );
};
