import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import cartReducer from "../features/cart/cartSlice";
import { shopApi } from '../services/shopServices'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authServices";

const store = configureStore({
   reducer: {
      cartReducer,
      userReducer,
      [shopApi.reducerPath]: shopApi.reducer,
      [authApi.reducerPath]: authApi.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store