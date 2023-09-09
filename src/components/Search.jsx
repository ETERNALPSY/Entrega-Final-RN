import { StyleSheet, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../global/colors'

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
         />
         {
            input &&
            <TouchableOpacity
               style={styles.searchButton}
               onPress={() => {
                  setInput('')
                  onPress('')
               }}
            >
               <Ionicons name="close" size={27} color="gray" />
            </TouchableOpacity>
         }
         <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
               onPress(input.trim())
               Keyboard.dismiss()
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
      width: '80%',
      borderRadius: 5,
      paddingVertical:5,
      paddingLeft: 10,
      fontSize: 20,
      fontFamily: 'montserratBold'
   },
   searchButton: {
      width: '10%',
   }
})