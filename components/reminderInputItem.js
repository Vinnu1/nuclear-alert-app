import React, { Component } from 'react'
import { ListItem, Left, Right, Icon, Button, Text } from 'native-base'

export default class ReminderInputItem extends Component {
    render() {
        return (
            <ListItem>
                <Left>
                    <Text
                        selectable={true}
                    >{this.props.reminder}</Text>
                </Left>
                <Right>
                    <Button rounded danger onPress={() => {
                        this.props.deleteFunc()
                    }}>
                        <Icon name='trash' />
                    </Button>
                </Right>
            </ListItem>

        );
    }
}