import { RElement } from 'typings/react';

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
  openArrow: getIcon('side-bar/arrow'),

  /* Home */
  homeTabs: getIcon('home/tabs'),
  homeAccordion: getIcon('home/accordion'),
  homeModal: getIcon('home/modal'),
  homeNotification: getIcon('home/notification'),
  homeRadioGroup: getIcon('home/radio-group'),
  homeSelector: getIcon('home/selector'),

  /* Notification */
  warningNotification: getIcon('notification/warning'),
  successNotification: getIcon('notification/success'),
  informationNotification: getIcon('notification/information'),
  errorNotification: getIcon('notification/error'),
};

export type PictureName = keyof typeof PICTURE;

interface Props {
  src?: keyof typeof PICTURE;
  alt?: string;
  size?: number;
  width?: number;
  height?: number;
}

export const Picture: RElement<Props> = (props) => {
  const { className, src, height, size, width, alt = '' } = props;

  if (!src) {
    return null;
  }

  const img = PICTURE[src];
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  return (
    <img
      alt={alt}
      className={className}
      style={{ width: imgWidth, height: imgHeight }}
      src={img}
    />
  );
};
