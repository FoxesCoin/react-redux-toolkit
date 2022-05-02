import { AccordionContext } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

import { ReactWrapper } from 'types/react';

export const Accordion = (props: ReactWrapper) => {
  const { className, children } = props;

  return <AccordionContext className={className}>{children}</AccordionContext>;
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
