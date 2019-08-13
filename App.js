import React, { Component } from 'react'
import OneSignal from 'react-native-onesignal'
import HomeUI from './components/homeUI'
import AlertUI from './components/alertUI'

export default class Home extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("YOUR_ONESIGNAL_APPID")
  }
  render() {
    let data = this.props.data
    return (
      <>
        {(data != null) ? <AlertUI country={data} /> : <HomeUI />}
      </>
    )
  }
} 