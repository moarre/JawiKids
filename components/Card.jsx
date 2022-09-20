import React from 'react'
import { View, StyleSheet } from "react-native"
import { Children } from 'react/cjs/react.production.min'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: '15px',
        padding: '40px 50px',
        margin: '20px 0',
        position: 'relative',
    },
});

function Card() {
  return (
    <View style={styles.container}>
        {Children}
    </View>
  )
}

export default Card