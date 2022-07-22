import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const AmortizationTable = ({ data }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Payment Number</Table.HeaderCell>
        <Table.HeaderCell>Principal</Table.HeaderCell>
        <Table.HeaderCell>Interest</Table.HeaderCell>
        <Table.HeaderCell>Remaining Balance</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map(({ interest, principal, balance }, index) => (
        <Table.Row>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{principal}</Table.Cell>
          <Table.Cell>{interest}</Table.Cell>
          <Table.Cell>{balance}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default AmortizationTable;
