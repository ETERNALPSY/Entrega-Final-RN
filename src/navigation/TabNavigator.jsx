import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//icons
import { Octicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../global/colors';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
         }}
      >
         <Tab.Screen
            name='Home'
            component={Home}
            options={{
               tabBarIcon: ({ focused }) => {
                  return (
                     <Octicons name="home" size={25} color={focused ? colors.green : colors.yellow} />
                  )
               },
            }}
         />
         <Tab.Screen
            name='Profile'
            component={Profile}
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

const styles = StyleSheet.create({})