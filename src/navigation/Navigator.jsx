import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../SQLite'
import { setUser } from '../features/user/userSlice'

const Navigator = () => {
   const { idToken } = useSelector((state) => state.userReducer.value)

   const dispatch = useDispatch()

   useEffect(() => {
      (async () => {
         try {
            const session = await getSession()
            if (session?.rows.length) {
               const user = session.rows._array[0]
               dispatch(setUser(user))
            }
         } catch (error) {

         }
      })()
   }, [])

   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            {
               idToken ?
                  <TabNavigator />
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