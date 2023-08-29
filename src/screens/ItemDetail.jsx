import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import cart from '../../assets/images/cartIcon.png'
import { useGetProductByIdQuery } from '../services/shopServices'

const ItemDetail = ({ navigation, route }) => {

   const { itemId } = route.params
   const { data: item, isLoading, isError, error } = useGetProductByIdQuery(itemId)



   return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         {
            item &&
            <View style={styles.wrapper}>
               <Text style={styles.title}>{item.title}</Text>
               <FlatList
                  data={item.images}
                  keyExtractor={item => item}
                  renderItem={({ item }) => {
                     return (
                        <Image
                           style={{ width: 400, height: 300 }}
                           source={{ uri: item }}
                           resizeMode='contain'
                        />
                     )
                  }}
                  horizontal={true}
               />
               <View style={styles.cartWrapper}>
                  <Text style={styles.price}>${item.price}/Kg</Text>
               </View>
               <Text style={styles.description}>{item.description}</Text>
               <GreenButton
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
   title: {
      fontSize: 40,
      fontFamily: 'poppins'
   },
   imgWrapper: {
      width: '100%',
      height: 300,
      backgroundColor: colors.gray,

      borderRadius: 10,
   },
   img: {
      flex: 1,
   },
   cartWrapper: {
      width: '100%',
   },
   price: {
      alignSelf: 'flex-end',
      fontSize: 35,
      fontFamily: 'poppins'
   },
   description: {
      fontSize: 20,
      fontFamily: 'poppins',
      backgroundColor: colors.green,
      color: colors.white,
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
   }
})