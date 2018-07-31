import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { BasicFormInput } from './BasicFormInput';

export const BasicFormInputs = props => (
    <Grid columns={props.count}>
        <Grid.Row>
            {props.names.map((name, index) =>
                <Grid.Column key={name}>
                    <BasicFormInput name={name}
                        onChange={props.handlers[index]} />
                </Grid.Column>
            )}
        </Grid.Row>
    </Grid>
);
