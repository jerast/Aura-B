import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice, shopSlice } from '@/store';
import { appSlice } from './slices/app.slice';

// TODO: Remove offline functions
export const store = configureStore({
   reducer: {
      app: appSlice.reducer,
      session: sessionSlice.reducer,
      shop: shopSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }) 
})