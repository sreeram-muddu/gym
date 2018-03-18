import React from 'react'
import {AppRegistry, View, Text} from 'react-native'
import Header from './src/components/Header'

const App = () => {
  return (
    <Header headerText='WORKOUT CALENDAR' />
  )
}

AppRegistry.registerComponent('gym', () => App)
