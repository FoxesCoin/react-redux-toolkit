import { SelectorHeader, SelectorItem, SelectorMenu } from './components';
import { SelectorParams, SelectorContext } from './selector.context';

import { ReactWrapper } from 'types/react';

interface Props extends ReactWrapper, SelectorParams {}

export const Selector = (props: Props) => {
  const {
    className,
    children,
    value,
    isDisabled,
    styling,
    setValue,
    checkEqual,
  } = props;

  return (
    <SelectorContext
      className={className}
      value={value}
      styling={styling}
      isDisabled={isDisabled}
      setValue={setValue}
      checkEqual={checkEqual}
    >
      {children}
    </SelectorContext>
  );
};

Selector.Header = SelectorHeader;
Selector.Item = SelectorItem;
Selector.Menu = SelectorMenu;
