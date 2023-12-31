import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { Feather, Entypo } from '@expo/vector-icons';

const PurchaseCardItem = ({ img, title, price, quantity, deleteItem, plusOne }) => {


   return (
      <Pressable style={styles.container}>
         <View style={styles.imgWrapper}>
            <Image
               style={styles.img}
               source={{ uri: img }}
               resizeMode='contain'
            />
         </View>
         <View style={styles.contentWrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wrapper} >
               <Text style={styles.price}>${price}/Kg</Text>
               <View style={styles.quantityWrapper}>
                  <TouchableOpacity style={styles.minusPlus} onPress={() => deleteItem(title)}>
                     {
                        quantity === 1
                           ? <Feather name="trash-2" size={22} color="red" />
                           : <Entypo name="minus" size={22} color="black" />
                     }
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity style={styles.minusPlus} onPress={() => plusOne(title)}>
                     <Entypo name="plus" size={22} color="black" />
                  </TouchableOpacity>
               </View>
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
      borderRadius: 5,
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
      padding: 7,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
   },
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   title: {
      fontSize: 26,
      fontFamily: 'poppins',
      color: colors.black,
   },
   price: {
      fontSize: 18,
      fontFamily: 'montserratBold',
      width: '50%',
      color: colors.black,
   },
   quantityWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '50%',
      paddingVertical: 2,
      borderWidth: 2,
      borderColor: colors.green,
      borderRadius: 5
   },
   minusPlus: {
      alignItems: 'center',
      width: '34%',
      height: '100%'
   },
   quantity: {
      fontSize: 22,
      fontFamily: 'montserratLight',
      color: colors.black
   }
})