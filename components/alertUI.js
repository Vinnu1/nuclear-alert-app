import React, { Component } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import ReminderList from './reminderList'
import { Text } from 'native-base'
import { AppState, Vibration } from 'react-native'
import { COLORS } from '../utils'

const Sound = require('react-native-sound')
Sound.setCategory('Playback')

export default class AlertUI extends Component {

  componentDidMount() {
    Vibration.vibrate([1000, 1000], true);

    let music = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      // Play the sound with an onEnd callback
      music.play((success) => {
        if (success) {
          console.log('successfully finished playing');

        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });

    AppState.addEventListener('change', (state) => {
      if (state === 'background') {
        music.stop()
        Vibration.cancel()
      }
    })
  }

  render() {
    return (
      <View style={STYLES.view}>
        <StatusBar backgroundColor={COLORS.red} barStyle="light-content" />
        <View style={STYLES.alertArea}>
          <Text style={STYLES.titleText}>NUCLEAR ALERT</Text>
          <Text style={STYLES.normalText}>Threat in </Text>
          <Text style={STYLES.warningText}>{this.props.country}</Text>
        </View>
        <View style={STYLES.reminderArea}>
          <ScrollView pagingEnabled >
            <ReminderList />
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
        </View>
      </View>
    )
  }
}

const STYLES = {
  normalText: {
    fontSize: 30,
    color: COLORS.white
  },
  titleText: {
    fontSize: 40,
    color: COLORS.white
  },
  warningText: {
    fontSize: 35,
    color: COLORS.yellow,
    textTransform: 'uppercase'
  },
  view: {
    flex: 1,
    backgroundColor: COLORS.red
  },
  alertArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  reminderArea: {
    flex: 1,
    backgroundColor: COLORS.white
  }
}