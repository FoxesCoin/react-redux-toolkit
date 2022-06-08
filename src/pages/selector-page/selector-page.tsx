import { Selector } from 'components/selector';
import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles/color';
import { RPage } from 'types/react';

const SELECTOR_ITEMS = ['Test_1', 'Test_2', 'Test_3'];

const Menu = styled(Selector.Menu)`
  border: 1px solid ${COLORS.white};
  border-radius: 0.25rem;
`;

export const SelectorPage: RPage = () => {
  const [item, setItem] = useState(SELECTOR_ITEMS.at(0));
  return (
    <>
      <Selector
        value={item}
        setValue={setItem}
        checkEqual={(value) => item === value}
      >
        <Selector.Header>{item}</Selector.Header>
        <Menu>
          {SELECTOR_ITEMS.map((element) => (
            <Selector.Item key={element} value={element}>
              {element}
            </Selector.Item>
          ))}
        </Menu>
      </Selector>
    </>
  );
};
