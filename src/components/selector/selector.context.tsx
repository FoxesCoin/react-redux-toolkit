import { createContext, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useOutsideCall } from 'services/hooks';

import { RWrapper } from 'types/react';

interface SelectorApiParams {
  setValue: (value: any) => void;
  checkEqual: (itemValue: any) => boolean;
}

interface SelectorStateParams {
  value: any;

  isDisabled?: boolean;
}

interface SelectorApi extends SelectorApiParams {
  setOpen: SetState<boolean>;
}

interface SelectorState extends SelectorStateParams {
  isOpen: boolean;
}

export type SelectorParams = SelectorApiParams & SelectorStateParams;

const API: SelectorApi = {
  setOpen: () => {
    return;
  },
  setValue: () => {
    return;
  },
  checkEqual: () => {
    return false;
  },
};

const STATE: SelectorState = {
  isOpen: false,
  value: '',
  isDisabled: false,
};

const Api = createContext<SelectorApi>(API);
const State = createContext<SelectorState>(STATE);
State.displayName = 'SelectorState';
Api.displayName = 'SelectorApi';

export const useSelectorState = () => {
  const context = useContext(State);
  if (context === null) {
    throw new Error(
      'SelectorState.Context must be used with SelectorState.Provider!'
    );
  }
  return context;
};

export const useSelectorApi = () => {
  const context = useContext(Api);
  if (context === null) {
    throw new Error(
      'SelectorApi.Context must be used with SelectorApi.Provider!'
    );
  }
  return context;
};

const Wrapper = styled.div`
  position: relative;
`;

export const SelectorContext: RWrapper<SelectorParams> = (parameters) => {
  const { children, className, isDisabled, value, setValue, checkEqual } =
    parameters;
  const [isOpen, setOpen] = useState(false);

  const ref = useOutsideCall<HTMLDivElement>(() => {
    setOpen(false);
  });

  const state = useMemo<SelectorState>(
    () => ({ isOpen, isDisabled, value }),
    [isOpen, isDisabled, value]
  );
  const api = useMemo<SelectorApi>(
    () => ({ setOpen, setValue, checkEqual }),
    [setValue, checkEqual]
  );

  return (
    <Api.Provider value={api}>
      <State.Provider value={state}>
        <Wrapper
          ref={ref}
          className={`selector ${isOpen ? 'selector_open' : ''} ${className}`}
        >
          {children}
        </Wrapper>
      </State.Provider>
    </Api.Provider>
  );
};
