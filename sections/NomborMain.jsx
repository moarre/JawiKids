import React from 'react'
import { View, Text, StyleSheet, FlatList, Button} from "react-native"
import Navigation from '../components/Navigation'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    justifyContent: 'center',
    marginBottom: 40,
  },
  text1: {
    fontSize: 30,
  },
  text2: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text3: {
    marginTop: 5,
    fontSize: 15,
  },
});

const data = [
  {id: 1, text: 'Learn Jawi number from beginning'},
  {id: 2, text: 'Enhance understanding of basic Jawi numbers'},
]

function NomborMain() {
  return (
    <View>
      <Navigation />
      <View style={styles.container}>
        <Text style={styles.text1}>Nombor</Text>
        <Text style={styles.text2}>Description</Text>
        <View style={styles.container2}>
          <Text>• Learn Jawi number from beginning</Text>
          <Text>• Enhance understanding of basic Jawi numbers</Text>
        </View>
        <Button
            title="LET'S GO!"
            color="#ffbd59"
        />
      </View>
    </View>
  )
}

export default NomborMain