import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    textDesign: {
        fontSize: 20,
        marginLeft: 40,
        flexWrap: 'wrap',
    },
    stretch: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        justifyContent: 'space-evenly',
    },
    textDesc: {
        justifyContent: 'space-evenly',
    }
});

function Courses() {
  return (
    <View>
        <Text style={styles.textDesign}>Courses</Text>
        <View style={styles.container}>
            <View>
                <Image style={styles.stretch} source={require('../assets/alifbata.png')} />
                <Text style={styles.textDesc}>Alif Ba Ta</Text>
            </View>
            <View>
                <Image style={styles.stretch} source={require('../assets/nombor.jpg')} />
                <Text>Nombor</Text>
            </View>
            <View>
                <Image style={styles.stretch} source={require('../assets/sukukata.jpg')} />
                <Text>Suku Kata</Text>
            </View>
            <View>
                <Image style={styles.stretch} source={require('../assets/petikan.png')} />
                <Text>Petikan Pendek</Text>
            </View>
        </View>
    </View>
  )
}

export default Courses