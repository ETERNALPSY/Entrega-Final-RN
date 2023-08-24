import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import InputArea from '../components/InputArea'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'

const SignUp = () => {
   return (
      <View style={styles.container}>
         <View style={styles.logoWrapper}>
            <Image
               style={styles.logo}
               source={logo}
               resizeMode='cover'
            />
            <Text style={styles.title}>Regístrate gratis</Text>
            <Text style={styles.subtitle}>Un placer recibirte en nuestra comunidad</Text>
         </View>
         <View style={styles.formWrapper}>
            <InputArea label={'Email'} />
            <InputArea label={'Contraseña'} />
            <InputArea label={'Confirmar Contraseña'} />
         </View>
         
            <GreenButton title={'¡Registrarse!'} />
      </View>
   )
}

export default SignUp

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 10,
      backgroundColor:colors.white
   },
   logoWrapper: {
      alignItems: 'center'
   },
   title: {
      fontSize: 40,
      fontFamily: 'poppins',
      textAlign: 'center'
   },
   subtitle: {
      fontFamily: 'montserratLight',
      fontSize: 25,
      textAlign: 'center'
   },
   formWrapper: {
      width: '90%',
      gap: 20,
   }
})