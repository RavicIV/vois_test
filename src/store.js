import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'

export default configureStore({
  reducer: {
    vois: cartSlice
  },
})