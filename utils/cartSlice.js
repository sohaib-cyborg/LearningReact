import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
      item:[],
    },
    reducers:{
        addItem:(state,action)=>{
           state.item.push(action.payload);
        },
        clearCart:(state)=>{
           state.item.length=0;
        },
    }
});

export const {addItem,clearCart} = CartSlice.actions; 
export default CartSlice.reducer;