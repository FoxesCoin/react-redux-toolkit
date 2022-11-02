import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { useContextHandler } from 'hooks/context';
import { useOutsideCall } from 'hooks/outside-call';
import { generateContext } from 'services/react';

import { SelectorTheme, SELECTOR_THEME } from './selector.constants';

import { RWrapper } from 'typings/react';

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

export interface SelectorParams extends SelectorApiParams, SelectorStateParams {
  styling: SelectorTheme;
}

const Api = generateContext<SelectorApi>('SelectorApiContext');
const State = generateContext<SelectorState>('SelectorStateContext');

export const useSelectorState = () => useContextHandler(State, 'SelectorState');
export const useSelectorApi = () => useContextHandler(Api, 'SelectorApi');

const Wrapper = styled.div<{ styling: SelectorTheme }>`
  position: relative;

  ${(props) => SELECTOR_THEME[props.styling]}
`;

export const SelectorContext: RWrapper<SelectorParams> = (parameters) => {
  const {
    children,
    className,
    isDisabled,
    value,
    styling,
    setValue,
    checkEqual,
  } = parameters;
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

  const componentClass = `${className ?? ''} selector`.trim() || undefined;

  return (
    <Api.Provider value={api}>
      <State.Provider value={state}>
        <Wrapper ref={ref} styling={styling} className={componentClass}>
          {children}
        </Wrapper>
      </State.Provider>
    </Api.Provider>
  );
};
