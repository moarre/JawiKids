import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    text: {
        color: '#000000',
        fontSize: 50,
    },
    containerz: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 30,
    },
    buttonSec: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    stretch: {
        marginLeft: 40,
        backgroundColor: 'green',
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 30,
    }
});

function Activity1() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>ا</Text>
                <Text style={styles.text}>Alif</Text>
            </View>
            <View style={styles.containerz}>
                <Image style={styles.stretch} source={require('../assets/ayam.png')} />
            </View>
            <View style={styles.buttonSec}>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ايم</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                    height: 40, 
                    width: 100, 
                    marginTop: 10, 
                    backgroundColor: '#D3D3D3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Text style={styles.textButton}>ايم</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Activity1