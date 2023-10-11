import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [
        //{id:1, amount:2}
    ]
  },
  reducers: {
    addItem: (state, action) => {
        let objIndex = state.itemsInCart.findIndex((obj => obj.id === action.payload.id));
        
        objIndex >= 0 
            ? state.itemsInCart[objIndex].units += 1 
            : state.itemsInCart.push({
                id: action.payload.id,
                name: action.payload.name,            
                price: action.payload.price,
                units: 1
            })
    },
    removeItem: (state, action) => {
      state.itemsInCart.filter(item => item.id !== action.payload.id)
    }
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer