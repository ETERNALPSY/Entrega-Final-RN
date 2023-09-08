import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../global/colors'

const Header = ({ route, navigation }) => {
   return (
      <View style={styles.container}>
         {
            navigation.canGoBack() &&
            <>
               <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                  <MaterialIcons name="arrow-back-ios" size={30} color={colors.green} />
               </Pressable>
               <View style={styles.logoWrapper}>
                  <View style={styles.imgWrapper}>
                     <Image
                        style={styles.img}
                        source={require('../../assets/images/limon.png')}
                        resizeMode='contain'
                     />
                  </View>
                  <Text style={[styles.logo, { fontWeight: 'bold' }]}>Food</Text>
                  <Text style={styles.logo}>ie</Text>
               </View>

            </>
         }

      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   container: {
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
   },
   logo: {
      fontFamily: 'poppins',
      color: colors.green,
      fontSize: 30,
   },
   imgWrapper: {
      height: '100%'
   },
   img: {
      width: 25,
      height: '100%'
   }
})