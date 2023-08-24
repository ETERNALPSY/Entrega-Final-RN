import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

const InputArea = ({ label, onChange, password, keyboard }) => {

   const [input, setInput] = useState('')

   const onChangeText = (text) => {
      setInput(text)
   }

   return (
      <View style={styles.inputWrapper}>
         <Text style={styles.label}>{label}</Text>
         <TextInput
            style={styles.input}
            value={input}
            onChangeText={onChangeText}
            placeholder={label}
            secureTextEntry={password}
            keyboardType={keyboard}
         />
      </View>
   )
}

export default InputArea

const styles = StyleSheet.create({
   inputWrapper: {
      gap: 2
   },
   label: {
      fontSize: 16,
      fontFamily:'montserratBold'
   },
   input: {
      width: '100%',
      borderBottomWidth: 3,
      borderRadius:5,
      borderColor:colors.green,
      fontSize: 20,
      padding: 10,
      fontFamily:'montserratBold'
   }

})