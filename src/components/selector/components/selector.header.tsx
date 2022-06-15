import styled from 'styled-components';

import { useClickEvent } from 'hooks/event';
import { useSelectorApi, useSelectorState } from '../selector.context';

import { RContainer } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  placeholder?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export const SelectorHeader: RContainer<Props> = (props) => {
  const { className, placeholder = '', children } = props;
  const { setOpen } = useSelectorApi();
  const { value, isDisabled } = useSelectorState();

  const handleClick = useClickEvent(() => {
    setOpen((current) => !current);
  });

  return (
    <Wrapper
      className={`${className ?? ''} selector__header`.trim()}
      onClick={isDisabled ? undefined : handleClick}
    >
      {!value && <Theme.Text>{placeholder}</Theme.Text>}
      {children ?? value}
    </Wrapper>
  );
};
