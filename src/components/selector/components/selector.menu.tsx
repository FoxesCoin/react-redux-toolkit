import styled from 'styled-components';

import { useSelectorState } from '../selector.context';

import { Z_INDEX } from 'styles/z-index';

import { RWrapper } from 'types/react';

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  z-index: ${Z_INDEX.SELECTOR};
  min-width: 100%;
`;

export const SelectorMenu: RWrapper = (props) => {
  const { children, className } = props;
  const { isOpen } = useSelectorState();

  return (
    <Menu isOpen={isOpen} className={className}>
      {children}
    </Menu>
  );
};
