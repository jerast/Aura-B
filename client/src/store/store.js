import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from '@/store';

export const store = configureStore({
   reducer: {
      session: sessionSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }) 
})