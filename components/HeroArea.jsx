import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign: {
        fontSize: 30,
    },
});

function HeroArea() {
    return (
        <View style={styles.container}>
            <Text style={styles.textDesign}>JawiKids</Text>
            <Image source={require('../assets/JawiKids1.png')} />
        </View>
    )
}

export default HeroArea