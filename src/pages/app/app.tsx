import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from 'pages/home';
import { SideBar } from 'pages/side-bar';
import { Input } from 'pages/input';
import { Page404 } from 'pages/page-404';
import { CheckboxPage } from 'pages/checkbox-page';

import { ROUTES } from 'constants/router';

import { RPage } from 'types/react';

export const App: RPage = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.START} element={<Home />} />
      <Route element={<SideBar />}>
        <Route path={ROUTES.BUTTON} element={<div>Button</div>} />
        <Route path={ROUTES.INPUT} element={<Input />} />
        <Route path={ROUTES.SELECTOR} element={<div>Selector</div>} />
        <Route path={ROUTES.RADIO_GROUP} element={<CheckboxPage />} />
        <Route path={ROUTES.ACCORDION} element={<div>Accordion</div>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);
