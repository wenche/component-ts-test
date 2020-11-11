import React from 'react';
import {Accordion} from '@equinor/eds-core-react'

const {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} = Accordion

const AccordionFun = () => {

  return (
    <Accordion>
      <AccordionItem isExpanded>
          <AccordionHeader>King of content</AccordionHeader>
          <AccordionPanel>I'm the content</AccordionPanel>
      </AccordionItem>
      <AccordionItem disabled>
          <AccordionHeader>Secret content</AccordionHeader>
          <AccordionPanel>I'm the content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
          <AccordionHeader>Queen of content</AccordionHeader>
          <AccordionPanel>I'm the content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
          <AccordionHeader>Don't open me!</AccordionHeader>
          <AccordionPanel>*BOOM*</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFun;