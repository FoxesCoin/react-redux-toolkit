import styled from 'styled-components';

import { InputList } from './components';

import { NumberInput } from 'components/number-input';
import { useState } from 'react';
import { RPage } from 'typings/react';

const Wrapper = styled.div`
  display: grid;
  row-gap: 1rem;
`;

const Input: RPage = () => {
  const [number, setNumber] = useState('');
  return (
    <Wrapper>
      <h1>Input</h1>
      <InputList styling="white" title="White" />
      <InputList styling="dark" title="Dark" />

      <NumberInput value={number} onChange={setNumber} />
    </Wrapper>
  );
};

export default Input;
