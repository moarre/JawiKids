import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonSK = ({ text }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 17,
        marginBottom: 17,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: "#6600ff",
        padding: 15,
        width: "65%",
        height: 85,
    },
    text: {
        fontSize: 22,
        color: "white",
        textAlign: "center",
    },
});

export default ButtonSK;
