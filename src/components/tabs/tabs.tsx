import { TabHeader, TabPanel } from './components';
import { TabProvider } from './tab.context';

import { ReactWrapper } from 'types/react';

export const Tabs = (props: ReactWrapper) => {
  const { children, className } = props;

  return <TabProvider className={className}>{children}</TabProvider>;
};

Tabs.Header = TabHeader;
Tabs.Panel = TabPanel;
