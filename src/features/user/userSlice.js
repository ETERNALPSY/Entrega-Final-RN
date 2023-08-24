import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: 'User',
   initialState: {
      value: {
         name: '',
         email: '',
         idToken: '',
         profileImage: ''
      }
   },
   reducers: {
      setUser: (state, action) => {
         state.value = action.payload
      },
      signOut: (state) => {
         state.value = {
            name: '',
            email: '',
            idToken: '',
            profileImage: ''
         }
      },
      saveImage: (state, action) => {
         state.value.profileImage = action.payload
      },
   }
})

export const { setUser, signOut, saveImage } = userSlice.actions
export default userSlice.reducer