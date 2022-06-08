import { Accordion } from 'components/accordion';

import { RPage } from 'types/react';

export const AccordionPage: RPage = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Skeleton context</Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Skeleton context</Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Content>Skeleton context</Accordion.Content>
      </Accordion>
    </>
  );
};
