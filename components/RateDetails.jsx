import React from 'react'
import { View, Text,Linking, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textDesign1: {
        fontSize: 40,
        marginBottom: 10,
        color: '#723EC8'
    },
    textDesign2: {
        fontSize: 16,
    },
    textDesign3: {
        marginTop: 20,
        fontSize: 13,
    },
    textDesign4: {
        fontSize: 20,
        color: '#723EC8'
    },
    rateIcon: {
        height: 40,
        width: 40,
        
    },
});


function RateDetails() {
    return (

        <View style={styles.container}>
            <Text style={styles.textDesign1}>Rate Us </Text>
            <Text style={styles.textDesign2}>Please rate our apps and gives feedback </Text>
            <Text style={styles.textDesign2}> for your better experience</Text>
            <Image style={styles.rateIcon}source={require('../assets/star.png')} />
            <Image style={styles.rateIcon}source={require('../assets/star.png')} />
            <Image style={styles.rateIcon}source={require('../assets/star.png')} />
            <Image style={styles.rateIcon}source={require('../assets/star.png')} />
            <Image style={styles.rateIcon}source={require('../assets/star.png')} />
            <Text style={styles.textDesign3}> Love the app? Rate us now</Text>
            <Text style={styles.textDesign4}onPress={() => {
              Linking.openURL('https://play.google.com/store/apps');
            }}>Rate Now</Text>   
        </View>
       
    )
}

export default RateDetails