import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { COLORS } from 'styles/color';

import { cssFlexCenter, cssFullScreenFixed } from 'styles/theme';
import { ReactWrapper } from 'types/react';

interface Props extends ReactWrapper {
  isShow: boolean;
}

const modalRoot = document.getElementById('modal') as HTMLElement;

const Wrapper = styled.div`
  ${cssFullScreenFixed}
  ${cssFlexCenter}
  transition: 0.5s all;
  overflow: hidden;
  background-color: ${COLORS.onyxOpacity};
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${COLORS.white};
`;

export const Modal = (props: Props) => {
  const { className, children, isShow } = props;

  if (!isShow) {
    return null;
  }

  return createPortal(
    <Wrapper>
      <Content className={className}>{children}</Content>
    </Wrapper>,
    modalRoot
  );
};
