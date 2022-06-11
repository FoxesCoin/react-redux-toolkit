import { useAccordionApi } from '../accordion.context';
import { useClickEvent } from 'hooks/event';

import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';

export const AccordionHeader: RWrapper = (props) => {
  const { className, children } = props;

  const setIsOpen = useAccordionApi();

  const handleClick = useClickEvent(() => {
    setIsOpen((current) => !current);
  });

  return (
    <Theme.FlexLine className={className} onClick={handleClick}>
      {children}
    </Theme.FlexLine>
  );
};
