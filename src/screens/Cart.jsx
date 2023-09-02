import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import PurchaseCardItem from '../components/PurchaseCardItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, deleteToCart } from '../features/cart/cartSlice'
import { usePostPurchaseMutation } from '../services/shopServices'

const Cart = () => {

   const { items: products, total } = useSelector(state => state.cartReducer.value)
   const [triggerPurchase, result] = usePostPurchaseMutation()
   const dispatch = useDispatch()
   const deleteItem = (title) => {
      dispatch(deleteToCart(title))
   }

   const purchase = () => {
      triggerPurchase({ items: products, total })
      dispatch(deleteCart())
   }

   console.log(result)

   return (
      <View style={styles.container}>
         <Text style={styles.cartTitle}>Mi lista de compras</Text>
         <View style={styles.wrapper}>
            <Text style={styles.addedProducts}>10 producto agregados</Text>
            <TouchableOpacity style={styles.deleteButton}>
               <Text style={styles.textDeleteButton}>Vaciar Carrito</Text>
            </TouchableOpacity>
         </View>
         <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
               return (
                  <PurchaseCardItem
                     title={item.name}
                     img={item.images}
                     price={item.price}
                     description={item.description}
                     quantity={item.quantity}
                     deleteItem={deleteItem}
                  />
               )
            }}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
         />
         <View style={styles.wrapper}>
            <Text style={styles.totalCost}>Costo total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
         </View>
         <GreenButton title={'Proceder al pago'} onPress={purchase} />
      </View>
   )
}

export default Cart

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.white,
      gap: 10
   },
   cartTitle: {
      fontSize: 35,
      fontFamily: 'poppins',
      fontWeight: 'bold'
   },
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10
   },
   addedProducts: {
      fontFamily: 'montserratLight',
      fontSize: 15
   },
   deleteButton: {
      padding: 5,
      paddingHorizontal: 15,
      borderWidth: 2,
      borderColor: 'red',
      borderRadius: 5,
   },
   textDeleteButton: {
      fontFamily: 'montserratBold',
      color: 'red',
      fontSize: 15
   },
   totalCost: {
      fontFamily: 'poppins',
      fontSize: 18,
      fontWeight: 'bold'
   },
   totalPrice: {
      fontFamily: 'montserratBold',
      fontSize: 20,
      fontWeight: 'bold'
   }
})