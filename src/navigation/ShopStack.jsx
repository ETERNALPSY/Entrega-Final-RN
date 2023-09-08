import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemDetail from '../screens/ItemDetail'
import Home from '../screens/Home'
import Main from '../screens/Main'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
   return (
      <Stack.Navigator
         screenOptions={({ route, navigation }) => ({
            header: () => {
               return <Header route={route} navigation={navigation} />;
            },
         })}
      >
         <Stack.Screen name='Main' component={Main} />
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='ItemDetail' component={ItemDetail} />
      </Stack.Navigator>
   )
}

export default ShopStack
