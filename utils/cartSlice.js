import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
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
export default CartSlice.reducer;
export {addItem,clearCart}; 