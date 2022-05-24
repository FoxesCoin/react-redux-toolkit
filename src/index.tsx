import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './pages/app';

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
    <GlobalStyles />
    <App />
  </Root>
);
