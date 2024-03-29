import { useTabState } from '../tab.context';

import { RWrapper } from 'typings/react';

import { Theme } from 'styles/theme';

interface Props {
  value: string;
}

export const TabPanel: RWrapper<Props> = (props) => {
  const { className, children, value } = props;
  const item = useTabState();

  if (value !== item) {
    return null;
  }

  return <Theme.FullScreen className={className}>{children}</Theme.FullScreen>;
};
