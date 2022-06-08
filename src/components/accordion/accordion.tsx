import { AccordionContext } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Accordion = ({ children }: Props) => (
  <AccordionContext>{children}</AccordionContext>
);

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
