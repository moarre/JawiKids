import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking, Modal, Pressable } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stretch1: {
    marginTop: 10,
    marginLeft: 40,
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  stretch2: {
    marginTop: 5,
    marginRight: 30,
    width: 100,
    height: 40,
    resizeMode: 'stretch',
  },
  modalNew: {
    height: '100%',
    width: '60%',
    marginTop: 1,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    marginLeft: 40,
    fontSize: 20,
  },
  container2: {
    marginTop: 15,
  }
});

function Navigation() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    //@TODO menu
    alert("hi")
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalNew}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              presentationStyle='pageSheet'
            >
              <Image style={styles.stretch1} source={require('../assets/menu.png')} />
            </Pressable>
            <View style={styles.container2}>
              <Text style={styles.modalText}>Home</Text>
              <Text style={styles.modalText}>Rate Us</Text>
              <Text style={styles.modalText}>Follow Us</Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Pressable
          onPress={() => setModalVisible(true)}
        >
          <Image style={styles.stretch1} source={require('../assets/menu.png')} />
        </Pressable>
        <Image style={styles.stretch2} source={require('../assets/JK.png')} />
      </View>
    </View>
  )
}

export default Navigation