import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import principal from '../../assets/images/principal.png'
import { colors } from '../global/colors'
import { Entypo } from '@expo/vector-icons'

const Welcome = ({ navigation }) => {

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Déjate llevar por una experiencia culinaria única</Text>
         <Image
            style={styles.img}
            source={principal}
            resizeMode='cover'
         />
         <TouchableOpacity
            onPress={() => navigation.navigate('LogIn')}
            style={styles.button}
         >
            <Text style={styles.buttonText}>Saborea la Excelencia</Text>
            <Entypo name="chevron-thin-right" size={30} color={colors.white} />
         </TouchableOpacity>
      </View>
   )
}

export default Welcome

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 15,
      justifyContent: 'space-between',
      backgroundColor: colors.white
   },
   title: {
      fontSize: 50,
      color: colors.black,
      fontFamily: 'poppins',
   },
   img: {
      width: 750,
      position: 'absolute',
      alignSelf: 'center',
      bottom: 45,
   },
   button: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
      borderRadius: 10,
      width: '90%',
      backgroundColor: colors.black,
      alignSelf: 'center'
   },
   buttonText: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'montserratBold'
   }
})