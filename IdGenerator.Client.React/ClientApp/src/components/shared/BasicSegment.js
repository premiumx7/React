import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export const BasicSegment = props => (
    <Segment.Group key='small' size='small'>
        <Segment inverted color={props.color}>{props.name}</Segment>
        <Segment>
            {props.children}
        </Segment>
    </Segment.Group>
)