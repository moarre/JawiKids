import React from 'react'
import { View, Text, Dimensions, TouchableHighlight, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 40,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    },
});

function Choices() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={{
                    borderRadius: 30,
                    width: 50,
                    height: 50,
                    backgroundColor: '#808080',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor='#ccc'
                onPress={() => alert('1')}
            >
                <Text style={styles.text}> ت </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 30,
                    width: 50,
                    height: 50,
                    backgroundColor: '#808080',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor='#ccc'
                onPress={() => alert('2')}
            >
                <Text style={styles.text}> ب </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 30,
                    width: 50,
                    height: 50,
                    backgroundColor: '#808080',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor='#ccc'
                onPress={() => alert('3')} 
            >
                <Text style={styles.text}> ا </Text>
            </TouchableHighlight>
        </View>
    )
}

export default Choices