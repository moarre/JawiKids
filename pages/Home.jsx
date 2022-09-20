import React from 'react'
import { View, Text } from "react-native"
import Navigation from '../components/Navigation'
import HeroArea from '../components/HeroArea'
import Courses from '../components/Courses'

function Home() {
  return (
    <View>
        <Navigation />
        <HeroArea />
        <Courses />
    </View>
  )
}

export default Home