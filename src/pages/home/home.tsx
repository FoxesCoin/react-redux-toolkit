import styled from 'styled-components';

import { HomeItem } from './home-item';

import { HOME_MENU } from './home.constants';

import { RPage } from 'types/react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ITEM_WIDTH = '300px';
const COLUMN_GAP = '20px';

const ItemList = styled.div`
  max-width: calc(${ITEM_WIDTH} * 4 + ${COLUMN_GAP} * 3);
  display: grid;
  column-gap: ${COLUMN_GAP};
  row-gap: 4rem;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fit, minmax(${ITEM_WIDTH}, 1fr));
`;

const Home: RPage = () => (
  <Wrapper>
    <ItemList>
      {HOME_MENU.map((item) => (
        <HomeItem key={item.route} {...item} />
      ))}
    </ItemList>
  </Wrapper>
);

export default Home;
