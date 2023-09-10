import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const PurchaseDetailCard = ({ item }) => {
   return (
      <View style={styles.container}>
         <Image
            width={35}
            height={35}
            source={{ uri: item.images }}
            resizeMode='contain'
         />
         <Text>{item.name} </Text>
         <Text>({item.quantity})</Text>
      </View>
   )
}

export default PurchaseDetailCard

const styles = StyleSheet.create({
   container: {
      flexDirection:'row',
      alignItems:'center',
      backgroundColor: colors.yellow,
      borderTopWidth: 1,
      padding: 2,
      borderColor: colors.green
   }
})