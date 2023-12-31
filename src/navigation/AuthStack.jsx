import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            options={{ headerShown: false }}
            name='Welcome'
            component={Welcome}
         />
         <Stack.Screen options={{ headerShown: false }} name='LogIn' component={LogIn} />
         <Stack.Screen name='Registro' component={SignUp} />
         <Stack.Screen name='Default' component={TabNavigator} />
      </Stack.Navigator>
   )
}

export default AuthStack