import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        persistedReducer,
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools extension

})

export const persistor = persistStore(store);