import { Accordion } from 'components/accordion';

import { RPage } from 'typings/react';

const AccordionPage: RPage = () => {
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

export default AccordionPage;
