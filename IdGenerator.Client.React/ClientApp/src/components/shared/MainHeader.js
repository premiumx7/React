import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'


export const MainHeader = props => (
    <Header as='h2' icon textAlign='center'>
        <Icon name={props.icon} circular />
        <Header.Content>{props.text}</Header.Content>
    </Header>
);