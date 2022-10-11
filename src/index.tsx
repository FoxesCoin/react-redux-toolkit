import 'services/why-did-you-rerender';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { NotificationList } from 'components/notification-list';
import { NotificationContext } from 'components/notification-list/notification-list.context';
import { App } from 'pages/app';

import { IS_PRODUCT } from 'constants/config';

import { GlobalStyles } from 'styles/global';
import 'styles/reset.css';

import { RWrapper } from 'types/react';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

const Root: RWrapper = ({ children }) => {
  if (IS_PRODUCT) {
    return <>{children}</>;
  }

  return <StrictMode>{children}</StrictMode>;
};

root.render(
  <Root>
    <NotificationContext>
      <GlobalStyles />
      <App />
      <NotificationList />
    </NotificationContext>
  </Root>
);
