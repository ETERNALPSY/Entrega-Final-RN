import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemDetail from '../screens/ItemDetail'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
   return (
      <Stack.Navigator
         screenOptions={ {headerShown: false } }
      
      >
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='ItemDetail' component={ItemDetail} />
      </Stack.Navigator>
   )
}

export default ShopStack
