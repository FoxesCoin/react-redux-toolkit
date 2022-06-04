import { TabProvider, TabProviderProps } from './tab.context';

import { ReactWrapper } from 'types/react';
import { TabHeader, TabPanel } from './components';

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
