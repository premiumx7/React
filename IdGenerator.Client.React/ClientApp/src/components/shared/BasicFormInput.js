import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react';

export const BasicFormInput = props => (
    <Form>
        <Form.Field>
            <Input
                label={{ basic: true, content: props.name }}
                labelPosition='left'
                onChange={props.onChange}>
              </Input>
        </Form.Field>
    </Form>
)
