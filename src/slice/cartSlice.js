import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
}

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
       addToCart: (state, action) => {
        const existingItem = state.cartItem.find(item => item.id === action.payload.id);

        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cartItem.push({...action.payload, quantity: 1})
        }
       },
       removeCart: (state, action) => {
        const existingItem = state.cartItem.find(item => item.id === action.payload.id);

        if(existingItem){
            if(existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id)
            }
        }
       },
       deleteFromCart: (state, action) => {
        const existingItem = state.cartItem.find(item => item.id === action.payload.id);

        if(existingItem){
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id);
        }
       }
    }
})

export const { addToCart, removeCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer