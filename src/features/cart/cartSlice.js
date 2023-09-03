import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
   name: 'Cart',
   initialState: {
      value: {
         //user: "",
         total: 0,
         items: []
      }
   },
   reducers: {
      addToCart: (state, action) => {

         const productExists = state.value.items.some(item => item.id === action.payload.id)

         if (productExists) {
            state.value.items = state.value.items.map(item => {
               if (item.id === action.payload.id) {
                  item.quantity += action.payload.quantity
                  return item
               }
               return item
            })
         } else state.value.items.unshift(action.payload)

         state.value.total = state.value.items.reduce(
            (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
            0
         )

      },

      addOne: (state, action) => {

         state.value.items = state.value.items.map(item => {
            if (item.name === action.payload) {
            item.quantity += 1
            return item
            }
            return item
         })

         state.value.total = state.value.items.reduce(
            (acc, cur) => acc += cur.price * cur.quantity,
            0)

      },

      deleteToCart: (state, action) => {

         const product = state.value.items.some(item => item.name === action.payload && item.quantity > 1)

         if (product) {
            state.value.items = state.value.items.map(item => {
               if (item.name === action.payload) {
                  item.quantity -= 1
                  return item
               }
               return item
            })
         } else state.value.items = state.value.items.filter(item => item.name !== action.payload)

         state.value.total = state.value.items.reduce(
            (acc, cur) => acc += cur.price * cur.quantity,
            0
         )
      },
      deleteCart: (state, action) => {
         state.value.items = []
         state.value.total = 0
      }
   }

})

export const { addToCart, deleteToCart, deleteCart, addOne } = cartSlice.actions
export default cartSlice.reducer
