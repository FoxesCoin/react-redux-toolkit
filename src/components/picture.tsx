import styled from 'styled-components';

import { handleClickEvent } from 'services/utils';

import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  logo: getIcon('logo'),

  /* Utils */
  cancel: getIcon('utils/cancel'),
  arrowBottom: getIcon('utils/arrow-bottom'),
};

export type Picture = keyof typeof PICTURE;

interface Props {
  picture?: keyof typeof PICTURE;
  alt?: string;
  size?: number;
  width?: number;
  height?: number;

  onClick?: () => void;
}

const Wrapper = styled(Theme.FlexCenter)`
  ${(props) => props.onClick && 'cursor: pointer;'}
`;

export const Picture: RElement<Props> = (props) => {
  const { className, picture, height, size, width, onClick, alt = '' } = props;

  if (!picture) {
    return null;
  }

  const img = PICTURE[picture].default;
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  if (onClick) {
    return (
      <Wrapper className={className} onClick={handleClickEvent(onClick)}>
        <img
          alt={alt}
          style={{ width: imgWidth, height: imgHeight }}
          src={img}
        />
      </Wrapper>
    );
  }

  return (
    <img
      alt={alt}
      className={className}
      style={{ width: imgWidth, height: imgHeight }}
      src={img}
    />
  );
};
