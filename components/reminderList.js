import React, { Component } from 'react'
import { List } from 'native-base'
import ReminderListItem from './reminderListItem'
import { retrieveData } from '../utils'

export default class ReminderList extends Component {

    state = {
        reminderArray: []
    }

    componentDidMount() {
        retrieveData('reminders').then(reminderArr =>
            this.setState({ reminderArray: reminderArr })
        )
    }

    Items = (itemArr) => {
        console.log(itemArr)
        let items = itemArr.map((item, index) =>
            <ReminderListItem key={index} reminder={item} />
        )
        return items
    }

    render() {
        return (
            <List>
                {this.Items(this.state.reminderArray)}
            </List>
        );
    }
}