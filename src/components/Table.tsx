import React from 'react';
import { Table} from '@equinor/eds-core-react'

const { Body, Row, Cell, Head } = Table

const TableTest = () => {
  return (
  <Table>
    <Head>
      <Row>
        <Cell as="th" scope="col">
          Name
        </Cell>
        <Cell as="th" scope="col">
          Allegiance
        </Cell>
        <Cell as="th" scope="col">
          Kill count
        </Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>Luke Skywalker</Cell>
        <Cell>Republic</Cell>
        <Cell variant="numeric">369470</Cell>
      </Row>
      <Row>
        <Cell>Darth Vader</Cell>
        <Cell>Sith</Cell>
        <Cell variant="numeric">59</Cell>
      </Row>
    </Body>
  </Table>
  );
};

export default TableTest;