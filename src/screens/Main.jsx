import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import Logo from '../../assets/images/logo.png'

const Main = ({ navigation }) => {


   return (
      <ScrollView style={styles.container}>
         <View style={styles.contentWrapper}>
            <Image
               source={Logo}
               resizeMode='contain'
            />
            <Text style={styles.description}>Encuentra los ingredientes perfectos para tus creaciones culinarias y disfruta de productos frescos y de alta calidad.</Text>
            <View style={styles.cardWrapper}>
               <View style={styles.imgWrapper}>
                  <Image
                     source={require('../../assets/images/mainProducts.png')}
                     style={styles.img}
                     resizeMode='contain'
                  />
               </View>
               <Text style={styles.cardTitle}>Aquí encontrarás todo lo que necesitas</Text>

               <GreenButton
                  title={'Explorar Menu'}
                  onPress={() => navigation.navigate('Home')}
               />
            </View>
         </View>

      </ScrollView>
   )
}

export default Main

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.white,
   },
   contentWrapper:{
      flex:1,
      justifyContent: 'space-between',
      alignItems:'center',
      gap:10,
      paddingHorizontal:10,
      paddingBottom:10
   },
   description: {
      fontFamily: 'montserratLight',
      textAlign: 'center',
      fontSize: 20
   },
   cardWrapper: {
      width: '100%',
      backgroundColor: colors.yellow,
      padding: 10,
      gap: 10,
      borderRadius: 10,
   },
   cardTitle: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'poppins',
      fontWeight: 'bold',
   },
   imgWrapper: {
      width: '100%',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
   },
   img: {
      flex: 1
   }
})