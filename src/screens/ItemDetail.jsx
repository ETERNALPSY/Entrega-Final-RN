import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import { useGetProductByIdQuery } from '../services/shopServices'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const ItemDetail = ({ navigation, route }) => {

   const { itemId } = route.params
   const { data: item, isLoading, isError, error } = useGetProductByIdQuery(itemId - 1)
   const dispatch = useDispatch()

   const toCart = () => {
      dispatch(addToCart({
         ...item,
         quantity: 1
      }))
   }

   return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         {
            item &&
            <View style={styles.wrapper}>
               <View style={styles.imgWrapper}>
                  <Image
                     style={styles.img}
                     source={{ uri: item.images }}
                     resizeMode='contain'
                  />
               </View>
               <View style={styles.priceWrapper}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}/Kg</Text>
               </View>
               <Text style={styles.description}>{item.description}</Text>
               <GreenButton
                  onPress={toCart}
                  title={'Agregar al Carrito'}
               />
            </View>
         }
      </ScrollView>
   )
}

export default ItemDetail

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.white
   },
   wrapper: {
      alignItems: 'center',
      gap: 15,
      paddingHorizontal: 10,
      paddingBottom: 15
   },
   imgWrapper: {
      width: '100%',
      height: 300,
      backgroundColor: colors.white,
      borderRadius: 10,
   },
   img: {
      flex: 1,
   },
   priceWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.green,
      borderRadius: 10,
      overflow: 'hidden'
   },
   title: {
      fontSize: 30,
      paddingHorizontal: 10,
      fontFamily: 'poppins',
      color: colors.white,
      backgroundColor: colors.green,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      overflow: 'hidden',
   },
   price: {
      fontSize: 18,
      paddingRight: 7,
      fontFamily: 'montserratBold',
      color: colors.black,
      backgroundColor: colors.white,
   },
   description: {
      width: '100%',
      fontSize: 21,
      fontFamily: 'poppins',
      backgroundColor: colors.yellow,
      color: colors.black,
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
   }
})