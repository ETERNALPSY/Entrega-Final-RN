import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultProfile from '../../assets/images/defaultProfile.png'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'

const Profile = () => {
   return (
      <View style={styles.container}>
         <Image
            style={styles.img}
            source={defaultProfile}
            resizeMode='cover'
         />
         <GreenButton title={'Editar Imagen de Perfil'} />
      </View>
   )
}

export default Profile

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor:colors.white,
      justifyContent: 'space-evenly',
      alignItems: 'center'
   },
   img:{
      borderRadius:10,
   }
})