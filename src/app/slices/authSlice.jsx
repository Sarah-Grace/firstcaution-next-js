import { createSlice } from "@reduxjs/toolkit";
 const authSlice = createSlice({
    name: "auth",
    initialState: {
      userEmail: "",
      userName: "",
      accessToken: "",
      refreshToken: "",
      otp: "",
    },
    reducers:{
      addUserInfo: (state, action) => {
         state.userEmail = action.payload.userEmail
         state.userName = action.payload.userName
      },
      addToken:(state, action) => {
         state.token = action.payload
      },
      addEmail: (state, action) => {
         state.userEmail = action.payload
      },
      addOtp: (state, action) => {
         state.otp = action.payload
      },
      addTokens: (state, action) => {
         state.accessToken = action.payload.accessToken
         state.refreshToken = action.payload.refreshToken
      },
      resetAll: (state, action) => {
         state.userEmail= ""
         state.userName= ""
         state.accessToken= ""
         state.refreshToken= ""
      }
    }
 })

 export const { addUserInfo, addToken, addEmail, addOtp, addTokens, resetAll } = authSlice.actions;
 export default authSlice.reducer;