import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



export default class MenuExampleSecondaryPointing extends Component {
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
                    <img src='/images/wireframe/media-paragraph.png' />
                </Segment>
            </div>
        )
    }
}
