import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from 'pages/home';
import { Page404 } from 'pages/page-404';

import { ROUTES } from 'constants/router';
import { RPage } from 'types/react';
import { Input } from 'pages/input';
import { CheckboxPage } from 'pages/checkbox-page';

export const App: RPage = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.START} element={<Home />}>
        <Route path={ROUTES.BUTTON} element={<div>Button</div>} />
        <Route path={ROUTES.INPUT} element={<Input />} />
        <Route path={ROUTES.SELECTOR} element={<div>Selector</div>} />
        <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
        <Route path={ROUTES.ACCORDION} element={<div>Accordion</div>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);
