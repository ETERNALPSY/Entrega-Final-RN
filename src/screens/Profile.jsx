import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import defaultProfile from '../../assets/images/defaultProfile.png'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import { useSelector } from 'react-redux'

const Profile = ({navigation}) => {

   const { profileImage } = useSelector(state => state.userReducer.value)
   console.log(profileImage)
   
   return (
      <View style={styles.container}>
         {
            profileImage ?
               <Image
                  style={styles.img}
                  source={{uri: profileImage}}
                  resizeMode='cover'
               />
               :
               <Image
                  style={styles.img}
                  source={defaultProfile}
                  resizeMode='cover'
               />
         }
         <GreenButton  
         onPress={() => navigation.navigate('SelectImage')}
         title={'Editar Imagen de Perfil'}
         font={30}
         />
      </View>
   )
}

export default Profile

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'space-evenly',
      alignItems: 'center'
   },
   img: {
      borderRadius: 10,
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: colors.green,
      overflow: 'hidden'
   }
})