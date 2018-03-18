import React from 'react'
import {View, Text} from 'react-native'

const Header = ({headerText}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}> {headerText} </Text>
    </View>
  )
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  headerStyle: {
    fontSize: 16,
    color: '#0a84c1'
  }
}

export default Header
