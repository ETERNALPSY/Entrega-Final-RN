import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import PurchaseCardItem from '../components/PurchaseCardItem'
import { useDispatch, useSelector } from 'react-redux'
import { addOne, deleteCart, deleteToCart } from '../features/cart/cartSlice'
import { usePostPurchaseMutation } from '../services/shopServices'

const Cart = () => {

   const { items: products, total } = useSelector(state => state.cartReducer.value)
   const [triggerPurchase, result] = usePostPurchaseMutation()

   const dispatch = useDispatch()

   const addedProducts = products.reduce(
      (acc, cur) => acc += cur.quantity,
      0)

   const plusOne = (title) => {
      dispatch(addOne(title))
   }

   const deleteItem = (title) => {
      dispatch(deleteToCart(title))
   }

   const purchase = () => {
      triggerPurchase({ items: products, total })
      dispatch(deleteCart())
   }

   return (
      <View style={styles.container}>
         {
            products.length === 0 ?
               <View style={styles.emptyCartWrapper}>
                  <Text style={styles.emptyCartTitle}>Tu carrito esta vació</Text>
                  <Image
                     style={styles.emptyCartImg}
                     source={require('../../assets/images/cartEmpty.png')}
                     resizeMode='contain'
                  />
                  <Text style={styles.emptyCartText}>¡Explora nuestro catalogo!</Text>
               </View>
               :
               <>
                  <Text style={styles.cartTitle}>Mi carrito</Text>
                  <View style={styles.wrapper}>
                     <Text style={styles.addedProducts}>{addedProducts} productos agregados</Text>
                     <Pressable style={styles.deleteButton} onPress={() => dispatch(deleteCart())}>
                        <Text style={styles.textDeleteButton}>Vaciar Carrito</Text>
                     </Pressable>
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
                              quantity={item.quantity}
                              plusOne={plusOne}
                              deleteItem={deleteItem}
                           />
                        )
                     }}
                     contentContainerStyle={{ gap: 10 }}
                     showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.wrapper}>
                     <Text style={styles.totalCost}>Costo total:</Text>
                     <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
                  </View>
                  <GreenButton title={'Proceder al pago'} onPress={purchase} />
               </>
         }
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
   emptyCartWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   emptyCartTitle: {
      color: colors.black,
      fontSize: 30,
      fontFamily: 'montserratBold'
   },
   emptyCartImg: {
      width:'100%'
   },
   emptyCartText:{
      color: colors.black,
      fontSize: 20,
      fontFamily: 'montserratLight'
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