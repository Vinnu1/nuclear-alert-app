import React, { Component } from 'react'
import { Container, Text, Content, Header, Body } from 'native-base'
import ReminderInput from './reminderInput'
import LocationInput from './locationInput'
import { COLORS } from '../utils'

export default class HomeUI extends Component {

  render() {
    return (
      <Container>
        <Header style={STYLES.header} androidStatusBarColor={COLORS.lightGray} >
          <Body style={STYLES.headerBody}>
            <Text style={STYLES.headerText}>Alert Environment</Text>
          </Body>
        </Header>
        <Content
          style={STYLES.content}
        >
          <LocationInput />
          <ReminderInput />
        </Content>
      </Container>
    )
  }
}

const STYLES = {
  header: {
    backgroundColor: COLORS.white
  },
  headerBody: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 20,
    color: COLORS.darkGray
  },
  content: {
    marginTop: 30
  }
}