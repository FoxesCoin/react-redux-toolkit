import { ReactNode } from 'react';

import { useSelectorApi } from '../selector.context';

import { RContainer } from 'types/react';

import { useClickEvent } from 'services/hooks';

interface Props {
  value: any;

  className?: string;

  children?: ReactNode | ((isSelected: boolean) => ReactNode);
}

export const SelectorItem: RContainer<Props> = (props) => {
  const { value, className, children } = props;
  const { setValue, setOpen, checkEqual } = useSelectorApi();

  const isEqual = checkEqual(value);
  const componentClass =
    `${isEqual ? 'selector__item_active' : ''} ${className ?? ''}`.trim() ||
    undefined;

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
    <div className={componentClass} onClick={handleClick}>
      {render()}
    </div>
  );
};
