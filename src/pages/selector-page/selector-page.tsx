import { useState } from 'react';

import { Selector } from 'components/selector';

import { RPage } from 'types/react';

const SELECTOR_ITEMS = ['Test_1', 'Test_2', 'Test_3'];

export const SelectorPage: RPage = () => {
  const [item, setItem] = useState(SELECTOR_ITEMS.at(0));
  return (
    <>
      <Selector
        styling="dark-orange"
        value={item}
        setValue={setItem}
        checkEqual={(value) => item === value}
      >
        <Selector.Header>{item}</Selector.Header>
        <Selector.Menu>
          {SELECTOR_ITEMS.map((element) => (
            <Selector.Item key={element} value={element}>
              {element}
            </Selector.Item>
          ))}
        </Selector.Menu>
      </Selector>
    </>
  );
};
