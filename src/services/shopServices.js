import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../dataBase/firebase'

export const shopApi = createApi({
   reducerPath: 'shopApi',
   baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
   tagTypes:['Purchases'],
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
         }),
         invalidatesTags:['Purchases']
      }),

      getPurchases: builder.query({
         query:() => `/orders.json`,
         transformResponse: (response) => {
            const productsTransformed = Object.values(response)
            return (productsTransformed)
         },
         providesTags:['Purchases']
      })

   }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, usePostPurchaseMutation, useGetPurchasesQuery } = shopApi