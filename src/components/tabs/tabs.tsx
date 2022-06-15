import { TabProvider, TabProviderProps } from './tab.context';

import { TabHeader, TabPanel } from './components';

import { ReactWrapper } from 'types/react';

export const Tabs = (props: ReactWrapper & TabProviderProps) => {
  const { children, className, defaultValue } = props;

  return (
    <TabProvider defaultValue={defaultValue} className={className}>
      {children}
    </TabProvider>
  );
};

Tabs.Header = TabHeader;
Tabs.Panel = TabPanel;
