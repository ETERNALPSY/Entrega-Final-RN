import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const GreenButton = ({ title, onPress }) => {
   return (
      <TouchableOpacity
         onPress={onPress}
         style={styles.button}
      >
         <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}

export default GreenButton

const styles = StyleSheet.create({
   button: {
      width: '80%',
      backgroundColor: colors.green,
      padding: 15,
      alignSelf: 'center',
      borderRadius: 50
   },
   text: {
      textAlign: 'center',
      color: colors.white,
      fontFamily: 'montserratBold',
      fontSize:25
   }
})