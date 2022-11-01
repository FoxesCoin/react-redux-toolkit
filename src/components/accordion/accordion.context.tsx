import { ReactNode, useMemo, useState } from 'react';

import { useContextHandler } from 'hooks/context';
import { generateContext } from 'services/react';

const State = generateContext<boolean>('AccordionStateContext');
const Api = generateContext<SetState<boolean>>('AccordionApiContext');

export const useAccordionState = () =>
  useContextHandler(State, 'AccordionState');
export const useAccordionApi = () => useContextHandler(Api, 'AccordionApi');

interface Props {
  children: ReactNode;
}

export const AccordionContext = (props: Props) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const state = useMemo(() => isOpen, [isOpen]);
  const api = useMemo(() => setIsOpen, []);

  return (
    <Api.Provider value={api}>
      <State.Provider value={state}>{children}</State.Provider>
    </Api.Provider>
  );
};
