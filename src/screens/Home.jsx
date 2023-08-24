import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Search from '../components/Search'
import SmallCardItem from '../components/SmallCardItem'
import { useGetProductsQuery } from '../services/shopServices'

const Home = ({ navigation }) => {

   const { data: products, isLoading, isError, error } = useGetProductsQuery()
   
   

   return (
      <View style={styles.container}>
         <Search />
         <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SmallCardItem item={item} navigation={navigation} />}
            style={styles.flatList}
            contentContainerStyle={{gap:10}}
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