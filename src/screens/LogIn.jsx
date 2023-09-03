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

const LogIn = ({ navigation }) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()

   const [triggerSignIn, resultSignIn] = useSignInMutation()

   const onSubmit = () => {
      triggerSignIn({
         email,
         password,
         returnSecureToken: true,
      })
   }

   useEffect(() => {
      (async () => {
         try {
            if (resultSignIn.isSuccess) {
               //Insert session in SQLite database
               // console.log('inserting Session');
               const response = await insertSession({
                  email: resultSignIn.data.email,
                  idToken: resultSignIn.data.idToken,
                  localId: resultSignIn.data.localId,
               })
               //console.log('Session inserted: ');
               console.log(resultSignIn.data);

               dispatch(setUser({
                  email: resultSignIn.data.email,
                  idToken: resultSignIn.data.idToken,
                  localId: resultSignIn.data.localId,
                  profileImage: "",
               }))
            }
         } catch (error) {
            console.log(error.message);
         }
      })()
   }, [resultSignIn])

   //useEffect(() => {
   //   try {
   //      if (resultSignIn.isSuccess) {
   //         dispatch(setUser({
   //            email: resultSignIn.data.email,
   //            idToken: resultSignIn.data.idToken
   //         }))
   //      }
   //   } catch (error) {
   //
   //   }
   //}, [resultSignIn])

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
            <InputArea
               label={'Email'}
               onChange={(email) => setEmail(email)}
            />
            <InputArea
               label={'Contraseña'}
               onChange={(password) => setPassword(password)}
               isSecure={true}
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