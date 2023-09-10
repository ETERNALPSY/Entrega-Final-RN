import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const Header = ({ route, navigation }) => {

   const { profileImage } = useSelector(state => state.userReducer.value)

   return (
      <View style={styles.container}>
               <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                  <MaterialIcons name="arrow-back-ios" size={30} color={colors.green} />
               </Pressable>
               <View style={styles.logoWrapper}>
                  <View style={styles.imgLogoWrapper}>
                     <Image
                        style={styles.imgLogo}
                        source={require('../../assets/images/limon.png')}
                        resizeMode='contain'
                     />
                  </View>
                  <Text style={[styles.logo, { fontWeight: 'bold' }]}>Food</Text>
                  <Text style={styles.logo}>ie</Text>
               </View>
               <View style={styles.profileWrapper}>
                  {
                     profileImage ?
                        <Image
                           style={styles.imgProfile}
                           source={{ uri: profileImage }}
                           resizeMode='contain'
                        />
                        :
                        <Image
                           style={styles.imgProfile}
                           source={require('../../assets/images/defaultProfile.png')}
                           resizeMode='cover'
                        />
                  }
               </View>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   container: {
      justifyContent: 'space-between',
      width: '100%',
      height: 40,
      flexDirection: 'row',
      backgroundColor: colors.white,
      paddingHorizontal: 10
   },
   backButton: {
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   logoWrapper: {
      flexDirection: 'row',
      alignItems:'center',
      gap:2
   },
   logo: {
      fontFamily: 'poppins',
      color: colors.green,
      fontSize: 30,
   },
   imgLogoWrapper: {
      height: '100%'
   },
   imgLogo: {
      width: 25,
      height: '100%',
   },
   profileWrapper: {
      alignSelf: 'flex-end',
      height: '100%',
   },
   imgProfile: {
      width: 35,
      height: 35,
      borderWidth:1,
      borderColor:colors.green,
      borderRadius: 100,
      overflow: 'hidden'

   }
})