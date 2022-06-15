import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AccordionPage } from './accordion-page';
import { ButtonPage } from './button-page';
import { CheckboxPage } from './checkbox-page';
import { Home } from './home';
import { Input } from './input';
import { ModalPage } from './modal-page';
import { NotificationPage } from './notification-page';
import { Page404 } from './page-404';
import { SelectorPage } from './selector-page';
import { SideBarLayout } from './side-bar-layout';
import { TabPage } from './tab-page';

import { ROUTES } from 'constants/router';

import { RPage } from 'types/react';

export const App: RPage = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.START} element={<Home />} />
      <Route element={<SideBarLayout />}>
        <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
        <Route path={ROUTES.INPUT} element={<Input />} />
        <Route path={ROUTES.SELECTOR} element={<SelectorPage />} />
        <Route path={ROUTES.RADIO_GROUP} element={<CheckboxPage />} />
        <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
        <Route path={ROUTES.TABS} element={<TabPage />} />
        <Route path={ROUTES.MODAL} element={<ModalPage />} />
        <Route path={ROUTES.NOTIFICATION} element={<NotificationPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);
