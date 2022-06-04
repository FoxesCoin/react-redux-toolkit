import { createContext, useContext, useMemo, useState } from 'react';

import { RWrapper } from 'types/react';

const State = createContext<boolean>(false);
const Api = createContext<SetState<boolean>>(() => {
  return;
});

State.displayName = 'AccordionState';
Api.displayName = 'AccordionApi';

export const useAccordionState = () => {
  const context = useContext(State);
  if (context === null) {
    throw new Error(
      'AccordionState.Context must be used with AccordionState.Provider!'
    );
  }
  return context;
};

export const useAccordionApi = () => {
  const context = useContext(Api);
  if (context === null) {
    throw new Error(
      'AccordionApi.Context must be used with AccordionApi.Provider!'
    );
  }
  return context;
};

export const AccordionContext: RWrapper = (props) => {
  const { children, className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const state = useMemo(() => isOpen, [isOpen]);
  const api = useMemo(() => setIsOpen, []);

  return (
    <State.Provider value={state}>
      <Api.Provider value={api}>
        <div className={`${isOpen ? 'accordion_open' : ''} ${className}`}>
          {children}
        </div>
      </Api.Provider>
    </State.Provider>
  );
};
