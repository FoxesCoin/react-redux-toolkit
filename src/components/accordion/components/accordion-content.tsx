import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';
import { useAccordionState } from '../accordion.context';

export const AccordionContent: RWrapper = (props) => {
  const { className, children } = props;

  const isOpen = useAccordionState();

  return (
    <Theme.ToggleContent
      className={className + ' ' + isOpen ? 'open' : 'close'}
    >
      {children}
    </Theme.ToggleContent>
  );
};
