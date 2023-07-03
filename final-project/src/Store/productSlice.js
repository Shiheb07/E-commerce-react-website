import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getProducts = createAsyncThunk("productSlice/getProducts",async(_,rejectWithValue)=>{
  try{const response = await axios.get('http://localhost:3000/products')
  return response.data
}
  catch(error){
    rejectWithValue(error.message)
  }
})

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products:[],
    loading:null,
    error:false
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getProducts.pending, (state,action)=>{
state.loading=true
state.error=false
    })
    .addCase(getProducts.fulfilled, (state,action)=>{
      state.loading=null
state.products=action.payload


          })
          .addCase(getProducts.rejected, (state,action)=>{
            state.loading=null
            state.error=true

                })
    
  }
});



export default productSlice.reducer