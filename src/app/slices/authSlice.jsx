import { createSlice } from "@reduxjs/toolkit";
 const authSlice = createSlice({
    name: "auth",
    initialState: {
      apiKey: "Api-Key HOnVzHkx.IW0KBoWpwjGfBSF19xfMyKxS8kfwUVeo",
      userEmail: "",
      userName: "",
      accessToken: "",
      refreshToken: "",
      otp: "",
      contractId: ""
    },
    reducers:{
      addUserInfo: (state, action) => {
         state.userEmail = action.payload.userEmail
         state.userName = action.payload.userName
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
      addContractId: (state, action) => {
         state.contractId = action.payload
      },
      resetAll: (state, action) => {
         state.userEmail= ""
         state.userName= ""
         state.accessToken= ""
         state.refreshToken= ""
      }
    }
 })

 export const { addUserInfo, addEmail, addOtp, addTokens, addContractId, resetAll } = authSlice.actions;
 export default authSlice.reducer;