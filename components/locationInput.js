import React, { Component } from 'react'
import { Switch, View } from 'react-native'
import { Form, Picker, Text, Card } from 'native-base'
import { storeData, retrieveData, COUNTRY_LIST, COLORS } from '../utils'

export default class LocationInput extends Component {

    state = {
        country: 'Afghanistan',
        isEnabled: true
    }

    pickerItems = (itemArr) => {
        let items = itemArr.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />
        })
        return items
    }

    componentDidMount() {
        console.log('in comMount')
        retrieveData('country').then(countryName => {
            if (restoredData != "")
                this.setState({ country: countryName, isEnabled: false })
        })
    }

    switchChange = (value) => {
        console.log('switch value:', value)
        this.setState({ isEnabled: value }, () => {
            if (value)
                storeData("", "country")
            else {
                storeData("Afghanistan", "country")
            }
        })
    }

    render() {

        return (
            <View>
                <Text style={STYLES.titleText}>LOCATION</Text>
                <Card style={STYLES.card}>
                    <View style={STYLES.switchView}>
                        <Switch value={this.state.isEnabled} onValueChange={(value) => this.switchChange(value)} />
                        <Text style={STYLES.switchText}>Everywhere</Text>
                    </View>
                    {
                        (!this.state.isEnabled) ?
                            <Form style={STYLES.form}>
                                <Picker
                                    mode="dropdown"
                                    onValueChange={(value) => {
                                        storeData(value, 'country')
                                            .then(() => {
                                                this.setState({ country: value })
                                            })
                                    }}
                                    selectedValue={this.state.country}
                                >
                                    {this.pickerItems(COUNTRY_LIST)}
                                </Picker>
                            </Form> : <></>
                    }
                </Card>
            </View >
        )
    }
}

const STYLES = {
    titleText: {
        marginLeft: 15,
        fontWeight: 'bold'
    },
    subtitleText: {
        marginLeft: 15
    },
    switchView: {
        flexDirection: 'row',
        marginVertical: 5
    },
    switchText: {
        marginTop: 3
    },
    form: {
        marginTop: -15
    },
    card: {
        borderRadius: 10
    }
}

