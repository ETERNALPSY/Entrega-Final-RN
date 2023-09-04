import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import InputArea from '../components/InputArea'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import { useSignUpMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'
import { isAtLeastSixCharacters, isValidEmail } from '../validations/auth'

const SignUp = () => {

   const [email, setEmail] = useState('')
   const [errorMail, setErrorMail] = useState('')
   const [password, setPassword] = useState('')
   const [errorPassword, setErrorPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

   const [triggerSignUp, result] = useSignUpMutation()
   const dispatch = useDispatch()

   useEffect(() => {
      if (result.isSuccess) {
         dispatch(setUser({
               email: result.data.email,
               idToken: result.data.idToken
            })
         )
      }
   }, [result])

   const onSubmit = () => {
      try {
         const isValidVariableEmail = isValidEmail(email)
         const isCorrectPassword = isAtLeastSixCharacters(password)
         const isRepeatedPasswordCorrect = password === confirmPassword

         if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
            const request = {
               email,
               password,
               returnSecureToken: true
            }
            triggerSignUp(request)
         }
            if (!isValidVariableEmail) setErrorMail('El email no es valido')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword('La contraseña es muy corta')
            else setErrorPassword('')
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword('Las contraseñas no coinciden')
            else setErrorConfirmPassword('')
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
         </View>
         <Text style={styles.title}>Regístrate gratis</Text>
         <View style={styles.formWrapper}>
            <InputArea
               label={'Email'}
               onChange={setEmail}
               error={errorMail}
            />
            <InputArea
               label={'Contraseña'}
               isSecure={true}
               onChange={setPassword}
               error={errorPassword}
            />
            <InputArea
               label={'Confirmar Contraseña'}
               isSecure={true}
               onChange={setConfirmPassword}
               error={errorConfirmPassword}
            />
         </View>
         <Text style={styles.subtitle}>Un placer recibirte en nuestra comunidad</Text>

         <GreenButton onPress={onSubmit} title={'¡Registrarse!'} />
      </View>
   )
}

export default SignUp

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      gap: 10,
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