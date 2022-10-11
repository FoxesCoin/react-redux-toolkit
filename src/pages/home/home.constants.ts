import { ROUTES } from 'constants/router';

import { HomeItemProps } from './home-item';

export const HOME_MENU: HomeItemProps[] = [
  { icon: 'homeTabs', route: ROUTES.TABS, title: 'Tabs' },
  { icon: 'homeTabs', route: ROUTES.BUTTON, title: 'Button' },
  { icon: 'homeSelector', route: ROUTES.SELECTOR, title: 'Selector' },
  {
    icon: 'homeRadioGroup',
    route: ROUTES.CHECKBOX,
    title: 'Radio group',
  },
  {
    icon: 'homeNotification',
    route: ROUTES.NOTIFICATION,
    title: 'Notification',
  },
  { icon: 'homeAccordion', route: ROUTES.ACCORDION, title: 'Accordion' },
  { icon: 'homeModal', route: ROUTES.MODAL, title: 'Modal' },
];
