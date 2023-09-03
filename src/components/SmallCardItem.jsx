import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SmallCardItem = ({ item, navigation }) => {

   const toItemDetail = () => {
      navigation.navigate('ItemDetail', { itemId: item.id })
   }

   return (
      <Pressable style={styles.container} onPress={toItemDetail}>
         <View style={styles.imgWrapper}>
            <Image
               style={styles.img}
               source={{ uri: item.images }}
               resizeMode='contain'
            />
         </View>
         <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.description} numberOfLines={4}>{item.description}</Text>
         </View>
      </Pressable>
   )
}

export default SmallCardItem

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.yellow,
      backgroundColor: colors.yellow,
      overflow: 'hidden'
   },
   imgWrapper: {
      width: '40%',
      height: 'auto',
      padding: 0.5,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: colors.white
   },
   img: {
      flex: 1,
   },
   contentWrapper: {
      gap: 10,
      width: '60%',
      gap: 10,
      padding: 10
   },
   title: {
      fontSize: 25,
      fontFamily: 'poppins',
      color: colors.black
   },
   price: {
      fontSize: 20,
      fontFamily: 'montserratBold',
      color: colors.black
   },
   description: {
      fontSize: 15,
      fontFamily: 'poppins',
      color: colors.black
   }
})