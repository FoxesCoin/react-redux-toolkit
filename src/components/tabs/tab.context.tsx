import { createContext, useContext, useMemo, useState } from 'react';
import { Theme } from 'styles/theme';
import { RWrapper } from 'types/react';

export interface TabProviderProps {
  defaultValue: any;
}

export const TabStateContext = createContext<string>('');
export const TabApiContext = createContext<SetState<string>>(() => {
  return;
});
TabStateContext.displayName = 'TabState';
TabApiContext.displayName = 'TabApi';

export const useTabState = () => {
  const context = useContext(TabStateContext);

  if (context === null) {
    throw new Error('TabState.Context must be used with TabState.Provider!');
  }
  return context;
};

export const useTabApi = () => {
  const context = useContext(TabApiContext);
  if (context === null) {
    throw new Error('TabApi.Context must be used with TabApi.Provider!');
  }
  return context;
};

export const TabProvider: RWrapper<TabProviderProps> = (props) => {
  const { className, children, defaultValue } = props;

  const [item, setItem] = useState<any>(defaultValue);

  const state = useMemo(() => item, [item]);
  const api = useMemo(() => setItem, []);

  return (
    <TabApiContext.Provider value={api}>
      <TabStateContext.Provider value={state}>
        <Theme.FullScreen className={className}>{children}</Theme.FullScreen>
      </TabStateContext.Provider>
    </TabApiContext.Provider>
  );
};
