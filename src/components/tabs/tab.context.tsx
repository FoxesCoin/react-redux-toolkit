import { useMemo, useState } from 'react';

import { useContextHandler } from 'hooks/context';
import { generateContext } from 'services/react';

import { RWrapper } from 'typings/react';

import { Theme } from 'styles/theme';

export interface TabProviderProps {
  defaultValue: any;
}

const State = generateContext<string>('TabStateContext');
const Api = generateContext<SetState<string>>('TabApiContext');

export const useTabState = () => useContextHandler(State, 'TabState');
export const useTabApi = () => useContextHandler(Api, 'TabApi');

export const TabProvider: RWrapper<TabProviderProps> = (props) => {
  const { className, children, defaultValue } = props;

  const [item, setItem] = useState<any>(defaultValue);

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
