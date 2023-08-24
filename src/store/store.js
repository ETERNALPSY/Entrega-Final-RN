import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import { shopApi } from '../services/shopServices'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
   reducer:{
      userReducer,
      [shopApi.reducerPath]: shopApi.reducer
   },
   middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store