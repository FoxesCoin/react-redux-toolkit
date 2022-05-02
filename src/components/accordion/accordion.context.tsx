import { createContext, useContext, useMemo, useState } from 'react';

import { RWrapper } from 'types/react';

interface ContextState {
  isOpen: boolean;
}

interface ContextApi {
  setIsOpen: SetState<boolean>;
}

const INIT_VALUE_STATE: ContextState = {
  isOpen: false,
};
const INIT_VALUE_API: ContextApi = {
  setIsOpen: () => {
    return;
  },
};

const State = createContext(INIT_VALUE_STATE);
const Api = createContext(INIT_VALUE_API);

export const useAccordionState = () => {
  const context = useContext(State);
  if (!context) {
    throw new Error(
      'AccordionState.Context must be used with AccordionState.Provider!'
    );
  }
  return context;
};

export const useAccordionApi = () => {
  const context = useContext(Api);
  if (!context) {
    throw new Error(
      'AccordionApi.Context must be used with AccordionApi.Provider!'
    );
  }
  return context;
};

export const AccordionContext: RWrapper = (props) => {
  const { children, className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const state = useMemo<ContextState>(() => ({ isOpen }), [isOpen]);
  const api = useMemo<ContextApi>(() => ({ setIsOpen }), []);

  return (
    <State.Provider value={state}>
      <Api.Provider value={api}>
        <div className={className}>{children}</div>
      </Api.Provider>
    </State.Provider>
  );
};
