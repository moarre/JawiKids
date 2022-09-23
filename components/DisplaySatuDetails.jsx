import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';


const teks = [

  `ساتو
   `,
   'Satu'
 
];

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    height: '100%',
  },
  box: {
    backgroundColor: '#723EC8',
    borderRadius: 10,
    width: '50%',
    marginBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: { 
    fontSize: 70, 
    textAlign: 'center' 
    
  },
  textDesign1: { 
    fontSize: 100,
    marginTop: 50,
    color: '#FFBD59'
  },
  textDesign2: { 
    fontSize: 30,
    marginTop: 130,
    color: '#FFBD59'
  },
  rateIcon:{
    height: 50,
    width: 50,
    marginLeft: 315,
    marginTop: 20,
  }
});

const DisplaySatuDetails = () => {
  return (
    <ScrollView>
        <Image style={styles.rateIcon}source={require('../assets/back.png')} />
       <Text style={styles.textDesign1}>         ا</Text>
      <View style={styles.container}>
        
        {teks.map((t, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{t}</Text>
          </View>
        ))}
        <Text style={styles.textDesign2}>Next</Text>
      </View>
    </ScrollView>
  );
};
export default DisplaySatuDetails;