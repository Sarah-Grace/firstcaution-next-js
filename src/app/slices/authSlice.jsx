import { createSlice } from "@reduxjs/toolkit";
import { removeLanguage } from "../(main)/utils/language";
 const authSlice = createSlice({
    name: "auth",
    initialState: {
      // apiKey: "Api-Key wGwvTc4n.7ySCt0XNqNn8gYpP19GGOCiQbDoApP5i", // local API key
      apiKey: "Api-Key WR9qQQh3.W31cnyEbG3zKSpD9XFPrwXAzQQemkbLW", // Vercel API Key
      userEmail: "",
      userName: "",
      accessToken: "",
      refreshToken: "",
      otp: "",
      contractId: "",
      invoiceId: "",
      language: "",
      paymentURl: ""
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
      addLanguage: (state, action) => {
         state.language = action.payload
      },
      resetLanguage: (state, action) => {
         state.language = ""
      },
      addPaymentUrl: (state, action) => {
         state.paymentURl = action.payload
      },
      resetPaymentUrl: (state, action) => {
         state.paymentURl = ""
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

 export const { addUserInfo, addEmail, addOtp, addTokens, addContractId, addInvoiceId, addLanguage,  resetAll , resetLanguage, resetPaymentUrl, addPaymentUrl } = authSlice.actions;
 export default authSlice.reducer; // for store configurations 