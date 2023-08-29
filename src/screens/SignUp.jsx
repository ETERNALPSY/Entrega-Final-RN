import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import InputArea from '../components/InputArea'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import { useSignUpMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'

const SignUp = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [triggerSingUp, result] = useSignUpMutation()
   const dispatch = useDispatch()

   useEffect(()=>{
      if (result.isSuccess) {
         dispatch(
            setUser({
               email: result.data.email,
               idToken: result.data.idToken
            })
         )
      }
   },[result])

   const onSubmit = () => {
      try {
         const request = {
            email,
            password,
            returnSecureToken: true
         }
         triggerSingUp(request)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <View style={styles.container} >
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
            <InputArea
               label={'Email'}
               email={email}
               onChange={setEmail}
            />
            <InputArea
               label={'Contraseña'}
               password={password}
               isSecure={true}
               onChange={setPassword}
            />
            <InputArea
               label={'Confirmar Contraseña'}
               isSecure={true}
               onChange={setConfirmPassword}
            />
         </View>
         <GreenButton onPress={onSubmit} title={'¡Registrarse!'} />
      </View>
   )
}

export default SignUp

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      gap:10,
      backgroundColor: colors.white
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