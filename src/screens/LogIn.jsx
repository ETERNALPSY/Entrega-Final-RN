import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import InputArea from '../components/InputArea'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { useSignInMutation } from '../services/authServices'
import { setUser } from '../features/user/userSlice'
import { insertSession } from '../SQLite'
import { isAtLeastSixCharacters, isValidEmail } from '../validations/auth'

const LogIn = ({ navigation }) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errorEmail, setErrorEmail] = useState('')
   const [errorPassword, setErrorPassword] = useState('')

   const dispatch = useDispatch()

   const [triggerSignIn, resultSignIn] = useSignInMutation()


   const onSubmit = () => {
      try {
         const isValidVariableEmail = isValidEmail(email)
         const isCorrectPassword = isAtLeastSixCharacters(password)

         if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
               email,
               password,
               returnSecureToken: true,
            })
         }
         if (!isValidVariableEmail) setErrorEmail('El email no es valido')
         else setErrorEmail('')
         if (!isCorrectPassword) setErrorPassword('La contraseña no es valida')
         else setErrorPassword('')
      } catch (error) {

      }
   }

   useEffect(() => {
      (async () => {
         try {
            if (resultSignIn.isSuccess) {
               //Insert session in SQLite database
               const response = await insertSession({
                  email: resultSignIn.data.email,
                  idToken: resultSignIn.data.idToken,
                  localId: resultSignIn.data.localId,
               })

               dispatch(setUser({
                  email: resultSignIn.data.email,
                  idToken: resultSignIn.data.idToken,
                  localId: resultSignIn.data.localId,
                  profileImage: "",
               }))
            }
         } catch (error) {

         }
      })()
   }, [resultSignIn])

   const toSignUp = () => {
      navigation.navigate('Registro')
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
            <InputArea
               label={'Email'}
               onChange={setEmail}
               error={errorEmail}
            />
            <InputArea
               label={'Contraseña'}
               onChange={setPassword}
               isSecure={true}
               error={errorPassword}
            />
         </View>
         <View style={styles.formWrapper}>
            <GreenButton onPress={onSubmit} title={'Iniciar Sesión'} />
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
      backgroundColor: colors.white
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