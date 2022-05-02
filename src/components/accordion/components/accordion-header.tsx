import { useAccordionApi } from '../accordion.context';

import { RWrapper } from 'types/react';

import { Theme } from 'styles/theme';
import { handleClickEvent } from 'services/utils';

export const AccordionHeader: RWrapper = (props) => {
  const { className, children } = props;

  const { setIsOpen } = useAccordionApi();

  const handleClick = handleClickEvent(() => {
    setIsOpen((current) => !current);
  });

  return (
    <Theme.FlexLine className={className} onClick={handleClick}>
      {children}
    </Theme.FlexLine>
  );
};
