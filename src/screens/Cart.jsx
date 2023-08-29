import { FlatList,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'

const Cart = () => {
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

         />
         <View style={styles.wrapper}>
            <Text style={styles.totalCost}>Costo total</Text>
            <Text style={styles.totalPrice}>$56.00/kg</Text>
         </View>
         <GreenButton title={'Proceder al pago'} />
      </View>
   )
}

export default Cart

const styles = StyleSheet.create({
   container:{
      flex:1,
      padding:10,
      backgroundColor:colors.white,
      gap:10
   },
   cartTitle:{
      fontSize:35,
      fontFamily:'poppins',
      fontWeight:'bold'
   },
   wrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
   },
   addedProducts:{
      fontFamily:'montserratLight',
      fontSize:15
   },
   deleteButton:{
      padding:5,
      paddingHorizontal:15,
      borderWidth:2,
      borderColor:'red',
      borderRadius:5,
   },
   textDeleteButton:{
      fontFamily:'montserratBold',
      color:'red',
      fontSize:15
   },
   totalCost:{
      fontFamily:'poppins',
      fontSize:18,
      fontWeight:'bold'
   },
   totalPrice:{
      fontFamily:'montserratBold',
      fontSize:20,
      fontWeight:'bold'
   }
})