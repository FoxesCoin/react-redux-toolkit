import styled from 'styled-components';

import { handleClickEvent } from 'services/utils';

import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  /* Utils */
  cancel: getIcon('utils/cancel'),
  arrowBottom: getIcon('utils/arrow-bottom'),

  /* SideBar */
  sideBarTabs: getIcon('side-bar/tabs'),
  sideBarAccordion: getIcon('side-bar/accordion'),
  sideBarModal: getIcon('side-bar/modal'),
  sideBarNotification: getIcon('side-bar/notification'),
  sideBarRadioGroup: getIcon('side-bar/radio-group'),
  sideBarSelector: getIcon('side-bar/selector'),

  /* Home */
  homeTabs: getIcon('home/tabs'),
  homeAccordion: getIcon('home/accordion'),
  homeModal: getIcon('home/modal'),
  homeNotification: getIcon('home/notification'),
  homeRadioGroup: getIcon('home/radio-group'),
  homeSelector: getIcon('home/selector'),
};

export type PictureName = keyof typeof PICTURE;

interface Props {
  src?: keyof typeof PICTURE;
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
  const { className, src, height, size, width, onClick, alt = '' } = props;

  if (!src) {
    return null;
  }

  const img = PICTURE[src];
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
