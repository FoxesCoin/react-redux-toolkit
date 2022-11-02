import styled from 'styled-components';

import { InputList } from './components';

import { RPage } from 'typings/react';

const Wrapper = styled.div`
  display: grid;
  row-gap: 1rem;
`;

const Input: RPage = () => (
  <Wrapper>
    <h1>Input</h1>
    <InputList styling="white" title="White" />
    <InputList styling="dark" title="Dark" />
  </Wrapper>
);

export default Input;
