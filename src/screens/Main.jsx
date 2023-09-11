import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import Logo from '../../assets/images/logo.png'

const Main = ({ navigation }) => {


   return (

      <View style={styles.contentWrapper}>
         <Image
            style={{ flex:1 }}
            source={Logo}
            resizeMode='contain'
         />
         <Text style={styles.description}>Encuentra los ingredientes perfectos para tus creaciones culinarias y disfruta de productos frescos y de alta calidad.</Text>
         <View style={styles.cardWrapper}>
            <Text style={styles.cardTitle}>Aquí encontrarás todo lo que necesitas</Text>
            <Image
               source={require('../../assets/images/mainProducts.png')}
               style={{flex:1}}
               resizeMode='contain'
            />
            <GreenButton
               title={'Explorar Menu'}
               onPress={() => navigation.navigate('Home')}
            />
         </View>
      </View>
   )
}

export default Main

const styles = StyleSheet.create({
   contentWrapper: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: 10,
      paddingBottom: 10
   },
   description: {
      fontFamily: 'montserratLight',
      textAlign: 'center',
      fontSize: 20
   },
   cardWrapper: {
      height: '60%',
      width: '100%',
      justifyContent: 'space-between',
      alignItems:'center',
      backgroundColor: colors.yellow,
      padding: 10,
      gap: 10,
      borderRadius: 10,
   },
   cardTitle: {
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'poppins',
      fontWeight: 'bold',
   }
})