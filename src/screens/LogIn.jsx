import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import InputArea from '../components/InputArea'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'

const LogIn = ({navigation}) => {

   const toSignUp = () => {
      navigation.navigate('SignUp')
   }
   return (
      <View style={styles.container}>
         <View>
            <Image
               style={styles.logo}
               source={logo}
               resizeMode='cover'
            />
            <Text style={styles.title}>¡Bienvenido!</Text>
         </View>
         <View style={styles.formWrapper}>
            <InputArea label={'Email'} keyboard={'email-address'} />
            <InputArea label={'Contraseña'} keyboard={'default'} />
         </View>
         <View style={styles.formWrapper}>
            
         <GreenButton title={'Iniciar Sesión'} />
            <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
            <GreenButton title={'¡Regístrate!'} onPress={toSignUp} />
         </View>
      </View>
   )
}

export default LogIn

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      gap: 35,
      backgroundColor:colors.white
   },
   title: {
      fontSize: 50,
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
      gap: 30,
   },
})