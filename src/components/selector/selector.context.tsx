import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { useOutsideCall } from 'services/hooks';

import { RWrapper } from 'types/react';
import { generateContext, useContextHandler } from 'services/hooks/context';

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

const Api = generateContext<SelectorApi>('SelectorApiContext');
const State = generateContext<SelectorState>('SelectorStateContext');

export const useSelectorState = () => useContextHandler(State, 'SelectorState');
export const useSelectorApi = () => useContextHandler(Api, 'SelectorApi');

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
