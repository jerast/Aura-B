import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice, shopSlice } from '@/store';

export const store = configureStore({
   reducer: {
      session: sessionSlice.reducer,
      shop: shopSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }) 
})