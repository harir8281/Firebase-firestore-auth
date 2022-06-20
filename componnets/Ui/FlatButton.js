import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const FlatButton = ({buttonText,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default FlatButton

const styles = StyleSheet.create({
    button:{

    },
    buttonText:{
        fontSize:15,
        textAlign:"right",
        color:"blue",
        marginHorizontal:25
    }
})