import { Tabs } from 'components/tabs';

import { RPage } from 'typings/react';

import { Theme } from 'styles/theme';

const TAB_ITEMS = ['Test', 'Test_2', 'Test_3'];

const TabPage: RPage = () => (
  <>
    <Tabs defaultValue={TAB_ITEMS.at(0)}>
      <Theme.GapRow>
        {TAB_ITEMS.map((item) => (
          <Tabs.Header value={item} key={item}>
            {item}
          </Tabs.Header>
        ))}
      </Theme.GapRow>
      {TAB_ITEMS.map((item) => (
        <Tabs.Panel value={item} key={item}>
          {item}
        </Tabs.Panel>
      ))}
    </Tabs>
  </>
);

export default TabPage;
