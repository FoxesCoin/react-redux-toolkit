import styled from 'styled-components';

import { Spinner } from './spinner';

import { COLORS } from 'styles/color';
import { Z_INDEX } from 'styles/z-index';

import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  isLoading: boolean;

  size?: number;
}

const Wrapper = styled(Theme.FlexCenter)`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: ${Z_INDEX.OVERLAY_LOADER};
  background-color: ${COLORS.opacityOnyx};
`;

export const OverlayLoader: RElement<Props> = (props) => {
  const { className, isLoading, size = 32 } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <Wrapper className={className}>
      <Spinner size={size} color="white" />
    </Wrapper>
  );
};
