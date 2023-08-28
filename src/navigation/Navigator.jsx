import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { useSelector } from 'react-redux'
import ItemDetail from '../screens/ItemDetail'



const Navigator = () => {
   //const { idToken } = useSelector((state) => state.userReducer.value)
   idToken = true
   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            {
               idToken ?
               <ItemDetail />
               //<TabNavigator />
               :
               <AuthStack />
            }
         </NavigationContainer>
      </SafeAreaView>
   )
}

export default Navigator

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   }
})