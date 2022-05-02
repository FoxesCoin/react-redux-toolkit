import styled from 'styled-components';
import { FONT_SIZES } from 'styles/font-size';

export const InputListStyled = {
  Block: styled.div`
    display: grid;
    row-gap: 1rem;
  `,
  FiledList: styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-radius: 0.5rem;
    border: 2px solid white;
  `,
  Legend: styled.legend`
    padding: 0 0.5rem;
    font-weight: bold;
    font-size: ${FONT_SIZES.h3};
  `,
};
