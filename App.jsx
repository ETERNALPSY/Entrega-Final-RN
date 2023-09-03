import { StatusBar } from 'expo-status-bar'
import Navigator from './src/navigation/Navigator'
import { useFonts } from 'expo-font'
import store from './src/store/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { init } from './src/SQLite'



export default function App() {

   //SQLite
   useEffect(() => {
      init()
         .then((result) => {
         })
         .catch((error) => {

         })
   })

   const [fontsLoaded] = useFonts({
      'poppins': require('./assets/poppins/Poppins-Regular.ttf'),
      'montserratLight': require('./assets/montserrat/Montserrat-Light.ttf'),
      'montserratBold': require('./assets/montserrat/Montserrat-SemiBold.ttf')
   })

   if (!fontsLoaded) {
      return null
   }

   return (
      <Provider store={store}>
         <StatusBar />
         <Navigator />
      </Provider>

   )
}
