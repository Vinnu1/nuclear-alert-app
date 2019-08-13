import React, { Component } from 'react'
import { ListItem, CheckBox, Body, Text } from 'native-base'

export default class ReminderListItem extends Component {
    state = {
        isChecked: false
    }

    toggleCheck = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        return (
            <ListItem onPress={() => this.toggleCheck()}>
                <CheckBox checked={this.state.isChecked} onPress={() => this.toggleCheck()} />
                <Body>
                    <Text selectable={true} style={{ textDecorationLine: (this.state.isChecked) ? 'line-through' : 'none' }}>
                        {this.props.reminder}
                    </Text>
                </Body>
            </ListItem>
        )
    }
}
