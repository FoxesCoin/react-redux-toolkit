import { ReactNode } from 'react';

import { AccordionContext } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

interface Props {
  children: ReactNode;
}

export const Accordion = ({ children }: Props) => (
  <AccordionContext>{children}</AccordionContext>
);

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
