import { createSlice } from "@reduxjs/toolkit";
 const authSlice = createSlice({
    name: "auth",
    initialState: {
      apiKey: "Api-Key BW5T1boB.BVfctTYItFVm0TN6pnMUD9tOV4hkazcH",
      userEmail: "",
      userName: "",
      accessToken: "",
      refreshToken: "",
      otp: "",
      contractId: "",
      invoiceId: ""
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
      addInvoiceId: (state, action) => {
         state.invoiceId = action.payload
      },
      resetAll: (state, action) => {
         state.userEmail= ""
         state.userName= ""
         state.accessToken= ""
         state.refreshToken= ""
         state.contractId= ""
         state.invoiceId= ""
      }
    }
 })

 export const { addUserInfo, addEmail, addOtp, addTokens, addContractId, addInvoiceId, resetAll } = authSlice.actions;
 export default authSlice.reducer;