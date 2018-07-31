import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

export const BasicFormSubmit = props => (
    <Grid columns={1}>
        <Grid.Row>
            <Grid.Column textAlign={props.align}>
                <Button content={props.content} primary onClick={props.onClick} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

