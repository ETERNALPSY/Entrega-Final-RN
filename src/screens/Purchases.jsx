import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { useGetPurchasesQuery } from '../services/shopServices'
import PurchaseCard from '../components/PurchaseCard'

const Purchases = () => {

   const { data: arrayData } = useGetPurchasesQuery()
   return (

      <View style={styles.container}>
         {
            arrayData ?
               <>
                  <Text style={styles.emptyTitle}>Únete al Mundo Culinario</Text>
                  <Image
                  style={styles.emptyImg}
                     source={require('../../assets/images/emptyBag.png')}
                     resizeMode='contain'
                  />
                  <Text style={styles.emptyText}>¿Listo para desatar tu creatividad gastronómica?</Text>
               </>
               :
               <>
                  <Text style={styles.title}>Mis compras</Text>
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
                        paddingBottom: 10
                     }}
                     showsVerticalScrollIndicator={false}
                  />
               </>
         }
      </View>
   )
}

export default Purchases

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      gap: 10
   },
   title: {
      fontSize: 35,
      fontFamily: 'poppins',
      fontWeight: 'bold'
   },
   emptyImg:{
      alignSelf:'center',
      width:'80%',
   },
   emptyTitle:{
      textAlign:'center',
      fontSize: 35,
      fontFamily: 'poppins',
      fontWeight: 'bold'
   },
   emptyText:{
      textAlign:'center',
      color: colors.black,
      fontSize: 20,
      fontFamily: 'montserratLight'
   }
})