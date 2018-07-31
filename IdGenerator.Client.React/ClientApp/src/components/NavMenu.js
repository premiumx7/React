import React, { Component } from 'react'
import { Route } from 'react-router';
import Category from './Category';
import Counter from './Counter';
import FetchData from './FetchData';

import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



export default class MenuFactoryParts extends Component {
    state = { activeItem: 'category' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name='category' active={activeItem === 'category'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='factory'
                        active={activeItem === 'factory'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='factory-parts'
                        active={activeItem === 'factory-parts'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Segment>
                    <Route exact path='/' component={Category} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
                </Segment>
            </div>
        )
    }
}
