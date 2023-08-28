import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../dataBase/firebase'

export const shopApi = createApi({
   reducerPath: 'shopApi',
   baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => `/products.json`
      }),
      getProductById: builder.query({
         query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
         transformResponse: (response) => {
            const productTransformed = Object.values(response).pop()
            return (productTransformed)
         }
      }),
   }),
})

export const {
   useGetProductsQuery,
   useGetProductByIdQuery
} = shopApi