import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SmallCardItem = ({ item, navigation }) => {

   const toItemDetail = () => {
      navigation.navigate('ItemDetail', {itemId: item.id})
   }

   return (
      <Pressable style={styles.container} onPress={toItemDetail}>
         <View style={styles.imgWrapper}>

            <Image
               style={styles.img}
               source={{ uri: item.images[0] }}
               resizeMode='contain'
            />
         </View>
         <View style={styles.contentWrapper}>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.price}>{item.description}</Text>
         </View>
      </Pressable>
   )
}

export default SmallCardItem

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: colors.green,
      gap: 10,
      padding: 10,
      borderRadius: 10
   },
   imgWrapper: {
      width: '40%',
      height: 'auto',
      borderRadius: 10,
   },
   img: {
      flex: 1,
   },
   contentWrapper: {
      width: '60%',
      gap: 10
   },
   title: {
      fontSize: 20,
      fontFamily: 'poppins',
      color:colors.white
   },
   price: {
      fontSize: 18,
      fontFamily: 'montserratBold',
      
      color:colors.white
   },
   description: {
      fontSize: 15,
      fontFamily: 'montserratLight',
      color:colors.white
   }
})