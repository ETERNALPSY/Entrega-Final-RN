import { FlatList, StyleSheet, View, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import Search from '../components/Search'
import SmallCardItem from '../components/SmallCardItem'
import { useGetProductsQuery } from '../services/shopServices'

const Home = ({ navigation }) => {

   const { data: arrayData, isLoading, isError, error } = useGetProductsQuery()

   const [products, setProducts] = useState(undefined)

   const onSearch = (word) => {
      const searched = arrayData && arrayData.filter(item => 
         item.name.toLowerCase().includes(word.toLowerCase()) || item.category.toLowerCase().includes(word.toLowerCase())
      )
      setProducts(searched)
   }

   useEffect(() => {
      if (!products) {
         setProducts(arrayData)
      }
   }, [arrayData, products])

   return (
      <View style={styles.container}>
         <Search onPress={onSearch} />
         <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SmallCardItem item={item} navigation={navigation} />}
            style={styles.flatList}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
         />
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      gap: 10
   }
})