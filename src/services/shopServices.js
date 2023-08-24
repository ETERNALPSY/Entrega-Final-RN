import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../dataBase/firebase'

export const shopApi = createApi({
   reducerPath: 'shopApi',
   baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => `/products.json`
      })
   })
})

export const {
   useGetProductsQuery
} = shopApi