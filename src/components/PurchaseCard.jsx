import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import PurchaseDetailCard from './PurchaseDetailCard'

const PurchaseCard = ({ date, total, items }) => {

   //transforma el timestamp en fecha 
   const localDate = new Date(date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })

   return (
      <Pressable style={styles.container}>
         <View style={styles.cardHeader}>
            <Text style={styles.date}>{localDate}</Text>
            <Text style={styles.date}>${total}</Text>
         </View>
         <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
               return (
                  <PurchaseDetailCard item={item} />
               )
            }}           
         />
      </Pressable>
   )
}

export default PurchaseCard

const styles = StyleSheet.create({
   container: {
      width: '100%',
      backgroundColor: colors.yellow,
      borderRadius: 5,
      overflow: 'hidden'
   },
   cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
   },
   date:{
      fontSize: 20,
      fontFamily:'poppins'
   }
})