import styled from 'styled-components';

import { COLORS } from 'styles/color';
import { Z_INDEX } from 'styles/z-index';

import { cssFullScreenFixed } from 'styles/theme';

import { RWrapper } from 'types/react';

interface Props {
  isShow: boolean;
}

const Wrapper = styled.div<Props>`
  ${cssFullScreenFixed}
  transition: 0.5s all;
  overflow: hidden;
  transform: translateX(${(props) => (props.isShow ? '0' : '100%')});
  z-index: ${Z_INDEX.OVERLAY_MODAL};
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${COLORS.white};
  width: 100%;
  height: 100%;
`;

export const OverlayModal: RWrapper<Props> = (props) => {
  const { className, children, isShow } = props;

  return (
    <Wrapper isShow={isShow}>
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};
