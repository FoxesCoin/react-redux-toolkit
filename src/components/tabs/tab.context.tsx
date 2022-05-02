import { createContext, useContext, useMemo, useState } from 'react';

import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';

interface ContextParams<T = any> {
  item: T;

  setItem: SetState<T>;
}

const INIT_VALUE: ContextParams = {
  item: '',
  setItem: () => {
    return;
  },
};

const Context = createContext(INIT_VALUE);
export const useTabContext = () => useContext(Context);

export const TabProvider: RWrapper = (props) => {
  const { className, children } = props;

  const [item, setItem] = useState<any>('');

  const provider = useMemo(() => ({ item, setItem }), [item]);

  return (
    <Context.Provider value={provider}>
      <Theme.AllSpace className={className}>{children}</Theme.AllSpace>
    </Context.Provider>
  );
};
