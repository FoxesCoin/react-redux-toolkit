import { createContext, useContext, useMemo, useState } from 'react';

import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';

const State = createContext<string>('');
const Api = createContext<SetState<string>>(() => {
  return;
});

export const useTabState = () => {
  const context = useContext(State);
  if (!context) {
    throw new Error('TabState.Context must be used with TabState.Provider!');
  }
  return context;
};

export const useTabApi = () => {
  const context = useContext(Api);
  if (!context) {
    throw new Error('TabApi.Context must be used with TabApi.Provider!');
  }
  return context;
};

export const TabProvider: RWrapper = (props) => {
  const { className, children } = props;

  const [item, setItem] = useState<any>('');

  const state = useMemo(() => item, [item]);
  const api = useMemo(() => setItem, []);

  return (
    <Api.Provider value={api}>
      <State.Provider value={state}>
        <Theme.FullScreen className={className}>{children}</Theme.FullScreen>
      </State.Provider>
    </Api.Provider>
  );
};
