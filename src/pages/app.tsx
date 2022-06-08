import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './home';
import { Input } from './input';
import { SideBarLayout } from './side-bar-layout';
import { TabPage } from './tab-page';
import { Page404 } from './page-404';
import { CheckboxPage } from './checkbox-page';
import { AccordionPage } from './accordion-page';

import { ROUTES } from 'constants/router';

import { RPage } from 'types/react';
import { SelectorPage } from './selector-page';

export const App: RPage = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.START} element={<Home />} />
      <Route element={<SideBarLayout />}>
        <Route path={ROUTES.BUTTON} element={<div>Button</div>} />
        <Route path={ROUTES.INPUT} element={<Input />} />
        <Route path={ROUTES.SELECTOR} element={<SelectorPage />} />
        <Route path={ROUTES.RADIO_GROUP} element={<CheckboxPage />} />
        <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
        <Route path={ROUTES.TABS} element={<TabPage />} />
        <Route path={ROUTES.MODAL} element={<div>Modal</div>} />
        <Route path={ROUTES.NOTIFICATION} element={<div>Notification</div>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);
