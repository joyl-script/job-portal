import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/model/authSlice'
import filtersReducer from '@/features/search-jobs/model/filtersSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch