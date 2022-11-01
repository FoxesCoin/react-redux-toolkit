import styled from 'styled-components';

import { Modal } from 'components/modal';

import { COLORS } from 'styles/color';

import { Theme } from 'styles/theme';

export const ConfirmModalStyled = {
  Wrapper: styled(Modal)`
    color: ${COLORS.black};

    display: grid;
    grid-template-rows: max-content 1fr max-content;

    width: 700px;
    height: 400px;
  `,

  Title: styled(Theme.FlexLine)`
    padding: 1rem;
    border-bottom: 1px solid ${COLORS.black};
  `,
  Content: styled.div`
    padding: 1rem;
  `,
  ButtonPanel: styled(Theme.GapRow)`
    padding: 1rem;
    border-top: 1px solid ${COLORS.black};
  `,
};
