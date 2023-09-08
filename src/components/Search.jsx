import { StyleSheet, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons';
import { colors } from '../global/colors';

const Search = ({ onPress }) => {

   const [input, setInput] = useState('')

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder='Buscar en Foodie'
            placeholderTextColor={colors.yellow}
            value={input}
            onChangeText={target => {
               setInput(target)
            }}
            returnKeyType='search'
            onKeyPress={({ nativeEvent: { key: keyValue} }) => {
               console.log(keyValue)
               Keyboard.isVisible(true)
               if (keyValue === 'ENTER'){
                  onPress(input.trim())
                  console.log('You must have pressed Enter ')
               }
            }}
         />
         <TouchableOpacity
            style={styles.button}
            onPress={() => {
               onPress(input.trim())
            }}
         >
            <Octicons name="search" size={27} color={colors.yellow} />
         </TouchableOpacity>
      </View>
   )
}

export default Search

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.green,
      borderRadius: 10
   },
   input: {
      width: '90%',
      borderRadius: 5,
      padding: 5,
      fontSize: 20,
      fontFamily: 'montserratBold'
   },
   button: {
      width: '10%',
   }
})