import React from 'react'
import Profile from '../screens/Profile'
import SelectImage from '../screens/SelectImage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
   return (
      <Stack.Navigator
         screenOptions={({ route, navigation }) => ({
            header: () => {
               return navigation.canGoBack() && <Header route={route} navigation={navigation} />;
            },
         })}
      >
         <Stack.Screen name='Profile' component={Profile} />
         <Stack.Screen name='SelectImage' component={SelectImage} />
      </Stack.Navigator>
   )
}

export default ProfileStack
