import styled from 'styled-components';

import { Spinner } from './spinner';

import { COLORS } from 'styles/color';
import { Z_INDEX } from 'styles/z-index';

import { RElement } from 'types/react';

import { cssFullSizeAbsolute, Theme } from 'styles/theme';

interface Props {
  isLoading: boolean;

  size?: number;
}

const Wrapper = styled(Theme.FlexCenter)`
  ${cssFullSizeAbsolute}
  z-index: ${Z_INDEX.overlayLoader};
  background-color: ${COLORS.onyxOpacity};
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
