import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { SimpleLineIcons } from '@expo/vector-icons';

const PurchaseCardItem = ({ img, title, price, quantity, deleteItem }) => {


   return (
      <Pressable  style={styles.container}>
         <View style={styles.imgWrapper}>
            <Image
               style={styles.img}
               source={{ uri: img }}
               resizeMode='contain'
            />
         </View>
         <View style={styles.contentWrapper}>
            <View style={styles.wrapper}>
               <Text style={styles.title}>{title}</Text>
               <Pressable  onPress={()=>deleteItem(title)} style={styles.icon}>
                  <SimpleLineIcons name="minus" size={30} color="red" />
               </Pressable>
            </View>
            <View style={styles.wrapper} >
               <Text style={styles.price}>${price}/Kg</Text>
               <Text style={styles.description}>{quantity}</Text>
            </View>
         </View>
      </Pressable>
   )
}

export default PurchaseCardItem

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.yellow

   },
   imgWrapper: {
      width: '30%',
      height: 'auto',
      backgroundColor: colors.white,
      padding: 0.5
   },
   img: {
      flex: 1,
   },
   contentWrapper: {
      width: '70%',
      backgroundColor: colors.yellow,
      gap: 10,
      padding: 10,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10
   },
   wrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
   },
   title: {
      fontSize: 25,
      fontFamily: 'poppins',
      color: colors.black
   },
   price: {
      fontSize: 18,
      fontFamily: 'montserratBold',

      color: colors.black
   },
   description: {
      fontSize: 20,
      fontFamily: 'montserratLight',
      color: colors.black
   }
})