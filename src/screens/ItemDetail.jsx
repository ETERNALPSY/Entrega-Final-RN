import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import GreenButton from '../components/GreenButton'
import cart from '../../assets/images/cartIcon.png'

const ItemDetail = () => {
   return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.wrapper}>
            <Text style={styles.title}>ItemDetail</Text>
            <View style={styles.imgWrapper}>
               <Image
                  style={styles.img}
                  source={{ uri: 'https://picsum.photos/600/300' }}
                  resizeMode='contain'
               />
            </View>
            <View style={styles.cartWrapper}>
               <Text style={styles.price}>$500.00/Kg</Text>
            </View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aliquid nisi, ipsa quo, incidunt consectetur autem quam, minima dicta exercitationem nam id! Numquam impedit dolores mollitia obcaecati suscipit reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum deleniti pariatur non veritatis excepturi veniam assumenda blanditiiLorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aliquid nisi, ipsa quo, incidunt consectetur autem quam, minima dicta exercitationem nam id! Numquam impedit dolores mollitia obcaecati suscipit reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum deleniti pariatur non veritatis excepturi veniam assumenda blanditiiLorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aliquid nisi, ipsa quo, incidunt consectetur autem quam, minima dicta exercitationem nam id! Numquam impedit dolores mollitia obcaecati suscipit reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum deleniti pariatur non veritatis excepturi veniam assumenda blanditii</Text>
            <GreenButton
               title={'Agregar al Carrito'}
            />
         </View>
      </ScrollView>
   )
}

export default ItemDetail

const styles = StyleSheet.create({
   container: {
   },
   wrapper: {
      alignItems: 'center',
      gap: 15,
      paddingHorizontal: 10,
      paddingBottom: 15
   },
   title: {
      fontSize: 50,
      fontFamily:'poppins'
   },
   imgWrapper: {
      width: '100%',
      height: 300,
      backgroundColor: colors.gray,

      borderRadius: 10,
      overflow: 'hidden'
   },
   img: {
      flex: 1,
   },
   cartWrapper: {
      width: '100%',
   },
   price: {
      alignSelf:'flex-end',
      fontSize: 35,
      fontFamily:'poppins'
   },
   description: {
      fontSize: 20,
      fontFamily:'poppins',
      backgroundColor: colors.green,
      color: colors.white,
      borderRadius: 10,
      padding: 10,
   }
})