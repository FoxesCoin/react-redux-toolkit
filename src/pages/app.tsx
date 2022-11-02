import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SideBarLayout } from './side-bar-layout';

import { ROUTES } from 'constants/router';

import { RPage } from 'typings/react';

const Home = lazy(() => import('./home'));
const Page404 = lazy(() => import('./page-404'));

const Accordion = lazy(() => import('./accordion-page'));
const Button = lazy(() => import('./button-page'));
const Checkbox = lazy(() => import('./checkbox-page'));
const Input = lazy(() => import('./input-page'));
const Modal = lazy(() => import('./modal-page'));
const Notification = lazy(() => import('./notification-page'));
const Selector = lazy(() => import('./selector-page'));
const Tab = lazy(() => import('./tab-page'));

export const App: RPage = () => (
  <Router>
    <Suspense fallback={<div>Load</div>}>
      <Routes>
        <Route path={ROUTES.START} element={<Home />} />
        <Route element={<SideBarLayout />}>
          <Route path={ROUTES.ACCORDION} element={<Accordion />} />
          <Route path={ROUTES.BUTTON} element={<Button />} />
          <Route path={ROUTES.CHECKBOX} element={<Checkbox />} />
          <Route path={ROUTES.INPUT} element={<Input />} />
          <Route path={ROUTES.MODAL} element={<Modal />} />
          <Route path={ROUTES.NOTIFICATION} element={<Notification />} />
          <Route path={ROUTES.SELECTOR} element={<Selector />} />
          <Route path={ROUTES.TABS} element={<Tab />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </Router>
);
