import { ROUTES } from 'constants/router';

import { SidebarLinkProps } from '../sidebar-link';

export const SIDEBAR_LINKS: SidebarLinkProps[] = [
  { icon: 'sideBarTabs', to: ROUTES.TABS, text: 'Tabs' },
  { icon: 'sideBarTabs', to: ROUTES.BUTTON, text: 'Button' },
  { icon: 'sideBarTabs', to: ROUTES.INPUT, text: 'Input' },
  { icon: 'sideBarSelector', to: ROUTES.SELECTOR, text: 'Selector' },
  { icon: 'sideBarRadioGroup', to: ROUTES.CHECKBOX, text: 'Radio group' },
  {
    icon: 'sideBarNotification',
    to: ROUTES.NOTIFICATION,
    text: 'Notification',
  },
  { icon: 'sideBarAccordion', to: ROUTES.ACCORDION, text: 'Accordion' },
  { icon: 'sideBarModal', to: ROUTES.MODAL, text: 'Modal' },
];
