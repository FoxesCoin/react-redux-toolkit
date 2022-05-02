import { InputList } from './components';

import { RPage } from 'types/react';

import { InputStyled as Styled } from './input.styled';

export const Input: RPage = () => (
  <Styled.Block>
    <h1>Input</h1>
    <InputList styling="white" title="White" />
    <InputList styling="dark" title="Dark" />
  </Styled.Block>
);
