import { StyleSheet, SafeAreaView, Platform, Text, StatusBar } from 'react-native'
import React from 'react'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Profile from '../screens/Profile'
import Welcome from '../screens/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'



const Navigator = () => {
   const email = true
   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            <AuthStack />
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