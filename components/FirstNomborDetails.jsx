import React from 'react'
import { View,Route,Text,TouchableHighlight, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
         
    },
    
    text: {
        fontSize: 30,
        color: '#FFBD59',
    },
    textT: {
        marginTop: 10,
        fontSize: 20,

    },
    rateIcon: {
        height: 50,
        width: 50,
        marginLeft: 300,
    },
});


function FirstNomborDetails() {
    return (

        <View style={styles.container}>
            <Image style={styles.rateIcon}source={require('../assets/back.png')} />
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
        
                }} 
            >
                <Text style={styles.text}>ا</Text>
             
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>۲</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>۳</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>٤</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>٥</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>٦</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>٧</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                    
                }} 
            >
                <Text style={styles.text}>٨</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#723EC8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20,
                    marginBottom:20,
                    
                }} 
            >
                <Text style={styles.text}> ٩</Text>
            </TouchableHighlight>
            <Text style={styles.textT}>See More</Text>      
        </View>
       
    )
}

export default FirstNomborDetails