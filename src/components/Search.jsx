import { StyleSheet, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons';
import { colors } from '../global/colors';

const Search = () => {

   const [input, setInput] = useState('')
   
   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder='Buscar en Foodie'
            value={input}
            onChangeText={target => {
               setInput(target)
            }}
         />
         
         <TouchableOpacity
            style={styles.button}
            onPress={() => {
               Keyboard.dismiss()
            }}
         >
            <Octicons name="search" size={27} color={colors.green} />
         </TouchableOpacity>
      </View>
   )
}

export default Search

const styles = StyleSheet.create({
   container: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth: 1,
      borderRadius:10
   },
   input: {
      width: '90%',
      borderRadius: 5,
      padding: 7,
      fontSize:20,
      fontFamily:'montserratBold'
   },
   button: {
      width: '10%'
   }
})