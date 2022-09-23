import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Image } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginRight: 30,
    },
    stretch: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        justifyContent: 'space-evenly',
    },
});

function GoBackButton() {
    return (
        <View style={styles.container}>
            <Image style={styles.stretch} source={require('../assets/back.png')} />
        </View>
    )
}

export default GoBackButton