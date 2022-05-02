import { useTabContext } from '../tab.context';

import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  value: any;
}

export const TabPanel: RWrapper<Props> = (props) => {
  const { className, children, value } = props;
  const { item } = useTabContext();

  if (value !== item) {
    return null;
  }

  return <Theme.AllSpace className={className}>{children}</Theme.AllSpace>;
};
