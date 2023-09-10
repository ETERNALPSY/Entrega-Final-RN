import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { useGetPurchasesQuery } from '../services/shopServices'
import PurchaseCard from '../components/PurchaseCard'

const Purchases = () => {

   const { data: arrayData } = useGetPurchasesQuery()

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Mis Compras</Text>
         <FlatList
            data={arrayData}
            keyExtractor={item => item.datePurchase}
            renderItem={({ item }) => {
               return (
                  <PurchaseCard
                     date={item.datePurchase}
                     total={item.total}
                     items={item.items}
                  />
               )
            }}
            contentContainerStyle={{
               gap: 10,
               paddingBottom:10
            }}
         />
      </View>
   )
}

export default Purchases

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 10,
   },
   title: {
      fontSize: 35,
      fontFamily: 'poppins',
      fontWeight: 'bold'
   },
})