import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Text, Card } from 'native-base'
import ReminderInputItem from './reminderInputItem'
import { storeData, retrieveData, COLORS } from '../utils'

export default class ReminderInput extends Component {
    state = {
        text: "",
        reminderArray: [],
        count: 0
    }

    Items = (itemArr) => {
        if (itemArr.length == 0) {
            return <></>
        }
        let items = itemArr.map((item, index) =>
            <ReminderInputItem key={index} reminder={item} deleteFunc={() => this.deleteItem(index)} />
        )
        return items
    }

    deleteItem = (index) => {
        let reminderArr = this.state.reminderArray
        reminderArr.splice(index, 1)
        storeData(reminderArr, 'reminders')
            .then(data => {
                console.log('inside delete')
                this.setState({ reminderArray: data, count: data.length })
            })

    }

    textChange = (text) => {
        this.setState({ text: text })
    }

    componentDidMount() {
        retrieveData('reminders').then((reminderArr) =>
            this.setState({ reminderArray: reminderArr, count: reminderArr.length })
        )
    }

    saveReminder = (text) => {
        let arr = this.state.reminderArray
        if (arr.length < 3) {
            arr.push(text)
            storeData(arr, 'reminders')
                .then((data) => {
                    console.log('going to change state')
                    this.setState({ reminderArray: data, text: "", count: data.length })
                })

        }
    }

    render() {
        console.log('reminders:', this.state.reminderArray)
        return (
            <>
                <Text style={STYLES.titleText}>REMINDERS</Text>
                {(this.state.count >= 3) ? <Text style={STYLES.subtitleText}>(Max. 3 reminders)</Text> : <></>}
                <Card style={STYLES.card}>
                    {(this.state.count < 3) ? <TextInput
                        style={STYLES.textInput}
                        onChangeText={(text) => this.textChange(text)}
                        value={this.state.text}
                        maxLength={100}
                        returnKeyLabel='done'
                        placeholder='Add Reminders (100 char each)'
                        multiline={true}
                        blurOnSubmit={true}
                        onSubmitEditing={({ nativeEvent }) => {
                            this.saveReminder(nativeEvent.text)
                        }}
                    /> : <></>}
                    {this.Items(this.state.reminderArray)}
                </Card>
            </>
        );
    }
}

const STYLES = {
    textInput: {
        maxHeight: 80,
        marginHorizontal: 5,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1
    },
    titleText: {
        marginLeft: 15,
        fontWeight: 'bold'
    },
    subtitleText: {
        marginLeft: 15,
        color: COLORS.orangeRed,
        fontWeight: 'bold'
    },
    card: {
        borderRadius: 10
    }
}