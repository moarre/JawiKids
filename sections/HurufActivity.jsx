import React from 'react'
import Navigation from '../components/Navigation'
import { View, Text } from "react-native"
import GoBackButton from '../components/GoBackButton'
import Activity1 from '../components/Activity1'

function HurufActivity() {
  return (
    <View>
        <Navigation />
        <GoBackButton />
        <Activity1 />
    </View>
  )
}

export default HurufActivity