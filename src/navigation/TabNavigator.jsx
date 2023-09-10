import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//icons
import { Octicons, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import ProfileStack from './ProfileStack';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { StyleSheet } from 'react-native';
import Purchases from '../screens/Purchases';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: styles.tabBar
         }}
      >
         <Tab.Screen
            name='ShopStack'
            component={ShopStack}
            options={{
               tabBarIcon: ({ focused }) => {
                  return (
                     <Octicons name="home" size={25} color={focused ? colors.green : colors.yellow} />
                  )
               },
            }}
         />
         <Tab.Screen
            name='CartStack'
            component={CartStack}
            options={{
               tabBarIcon: ({ focused }) => {
                  return (
                     <Ionicons name="md-cart-outline" size={34} color={focused ? colors.green : colors.yellow} />
                  )
               }
            }}
         />
         <Tab.Screen
            name='Compras'
            component={Purchases}
            options={{
               tabBarIcon: ({ focused }) => {
                  return (
                     <MaterialCommunityIcons name="barcode-scan" size={30} color={focused ? colors.green : colors.yellow} />
                  )
               }
            }}
         />
         <Tab.Screen
            name='ProfileStack'
            component={ProfileStack}
            options={{
               tabBarIcon: ({ focused }) => {
                  return (
                     <FontAwesome5 name="user-circle" size={25} color={focused ? colors.green : colors.yellow} />
                  )
               },
            }}
         />
      </Tab.Navigator>
   )
}

export default TabNavigator

const styles = StyleSheet.create({
   tabBar: {
      borderTopWidth: 2,
      borderTopColor: colors.green
   }
})
