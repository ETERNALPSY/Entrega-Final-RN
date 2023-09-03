import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import defaultProfile from '../../assets/images/defaultProfile.png'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../features/user/userSlice'
import { deleteSession } from '../SQLite'
import { deleteCart } from '../features/cart/cartSlice'

const Profile = ({navigation}) => {

   const { profileImage, localId } = useSelector(state => state.userReducer.value)
   const dispatch = useDispatch()

   const logOut =() => {
      deleteSession(localId)
      dispatch(signOut())
      dispatch(deleteCart())
   }

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
         />
         <GreenButton  
            title={'Cerrar sesión'}
            onPress={logOut}
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