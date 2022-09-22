// SideBar
import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import HurufMain from './sections/HurufMain';
import HurufChoice from './sections/HurufChoice';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <ScrollView>
      <HurufChoice />
    </ScrollView>
  )
}

export default App;
