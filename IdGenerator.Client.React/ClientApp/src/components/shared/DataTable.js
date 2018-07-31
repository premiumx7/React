import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export const DataTable = props => (
    <Table>
        <Table.Header>
            <Table.Row>
                {props.columnNames.map(name =>
                    <Table.HeaderCell key={name}>
                        {name}
                    </Table.HeaderCell>
                )}
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {props.data.map(row =>
                <Table.Row key={row.id}>
                    {props.dataPropsNames.map(name =>
                        <Table.Cell key={name}>
                            {row[name]}
                        </Table.Cell>
                    )}
                </Table.Row>
            )}
        </Table.Body>
    </Table>
);
