import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {
    addtocart:(state,action)=>{
const findProduct=state.find(product=>product.id === action.payload.id)
if(findProduct){
    findProduct.quantity+=1
}else{
    state.push({...action.payload, quantity:1})
}
    },
    removefromcart:(state,action)=>{
const filterProduct= state.filter(product=> product.id !== action.payload.id)
return filterProduct
    },
    increment:(state,action)=>{
const findProduct=state.find(product=> product.id === action.payload.id)
if(findProduct){
    findProduct.quantity+=1
}
    },
    decrement:(state,action)=>{
        const findProduct=state.find(product=> product.id === action.payload.id)
        if(findProduct.quantity >1){
            findProduct.quantity-=1
        }
    },
    clear:(state,action)=>{
        return []
    }
  }
});

export const {addtocart,removefromcart,increment,decrement,clear} = cartSlice.actions

export default cartSlice.reducer