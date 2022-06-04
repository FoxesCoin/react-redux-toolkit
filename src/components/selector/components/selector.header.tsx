import { useSelectorApi, useSelectorState } from '../selector.context';

import { RContainer } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  placeholder?: string;
}

export const SelectorHeader: RContainer<Props> = (props) => {
  const { className, placeholder = '', children } = props;
  const { setOpen } = useSelectorApi();
  const { value, isDisabled } = useSelectorState();

  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <Theme.FlexLine
      className={className}
      onClick={isDisabled ? undefined : handleClick}
    >
      {!value && <Theme.Text>{placeholder}</Theme.Text>}
      {children ?? value}
    </Theme.FlexLine>
  );
};
