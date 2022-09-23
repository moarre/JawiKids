import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView } from "react-native"
import Home from './pages/Home';
import HurufMain from './sections/HurufMain';
import HurufChoice from './sections/HurufChoice';
import HurufActivity from './sections/HurufActivity';

function App() {
  return (
    <ScrollView>
      <HurufActivity />
    </ScrollView>
  )
}

export default App;