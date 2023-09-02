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
         query: (productId) => `products/${productId}.json`,
      }),

      postPurchase: builder.mutation({
         query: (order) => ({
            url: `orders.json`,
            method: `POST`,
            body: order
         })
      }),

   }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, usePostPurchaseMutation } = shopApi