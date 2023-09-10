import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const PurchaseDetailCard = ({ item }) => {
   return (
      <View style={styles.container}>
         <View style={styles.imgTitleWrapper}>
            <Image
               width={60}
               height={60}
               source={{ uri: item.images }}
               resizeMode='contain'
            />
            <Text style={styles.title}>{item.name} </Text>
         </View>
         <Text style={styles.title}>{item.quantity}kg</Text>
      </View>
   )
}

export default PurchaseDetailCard

const styles = StyleSheet.create({
   container: {
      minWidth: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.yellow,
      borderTopWidth: 1,
      paddingHorizontal: 10,
      borderColor: colors.green
   },
   imgTitleWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
   },
   title: {
      fontSize: 25,
      fontFamily: 'poppins'
   }
})