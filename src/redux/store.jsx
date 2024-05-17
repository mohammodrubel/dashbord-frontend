import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/Featchers/Auth/AuthSlice'

import { baseApi } from './api/baseApi'
import {persistStore,persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const parsistConfig = {
  key:'auth',
  storage
}

const persistAuthReducer =persistReducer(parsistConfig,authReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    auth:persistAuthReducer  
  },
  middleware:(getDefaultMiddelware)=>getDefaultMiddelware({serializableCheck:{
    ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
  }}).concat(baseApi.middleware)
})

export const persistor = persistStore(store)