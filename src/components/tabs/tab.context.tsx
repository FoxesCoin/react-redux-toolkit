import { useMemo, useState } from 'react';
import { generateContext, useContextHandler } from 'services/hooks/context';
import { Theme } from 'styles/theme';
import { RWrapper } from 'types/react';

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
