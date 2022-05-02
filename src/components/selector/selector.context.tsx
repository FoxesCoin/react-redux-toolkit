import { createContext, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useOutsideCall } from 'services/hooks';

import { RWrapper } from 'types/react';

export interface SelectorParams {
  value: any;

  setValue: (value: any) => void;

  isDisabled?: boolean;
}

interface SelectorContext extends SelectorParams {
  isOpen: boolean;

  setOpen: SetState<boolean>;
}

const INIT_VALUE: SelectorContext = {
  isOpen: false,
  value: '',
  isDisabled: false,

  setOpen: () => {
    return;
  },
  setValue: () => {
    return;
  },
};

const Context = createContext(INIT_VALUE);
const Wrapper = styled.div`
  position: relative;
`;

export const useSelectorContext = () => useContext(Context);

export const SelectorContext: RWrapper<SelectorParams> = (parameters) => {
  const { children, className, isDisabled, value, setValue } = parameters;
  const [isOpen, setOpen] = useState(false);

  const ref = useOutsideCall<HTMLDivElement>(() => {
    setOpen(false);
  });

  const provider = useMemo(
    () => ({ isOpen, isDisabled, value, setOpen, setValue }),
    [isOpen, isDisabled, value]
  );

  return (
    <Context.Provider value={provider}>
      <Wrapper ref={ref} className={className}>
        {children}
      </Wrapper>
    </Context.Provider>
  );
};
