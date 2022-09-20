import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stretch1: {
    marginTop: 10,
    marginLeft: 40,
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  stretch2: {
    marginTop: 5,
    marginRight: 30,
    width: 100,
    height: 40,
    resizeMode: 'stretch',
  },
});

function Navigation() {
  return (
    <View style={styles.container}>
        <Image style={styles.stretch1} source={require('../assets/menu.png')} />
        <Image style={styles.stretch2} source={require('../assets/JK.png')} />
    </View>
  )
}

export default Navigation