import { Tabs } from 'components/tabs';
import { Theme } from 'styles/theme';
import { RPage } from 'types/react';

const TAB_ITEMS = ['Test', 'Test_2', 'Test_3'];

export const TabPage: RPage = () => {
  return (
    <div>
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
    </div>
  );
};
