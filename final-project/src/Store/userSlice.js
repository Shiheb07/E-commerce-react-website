import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const register = createAsyncThunk('users/register', async ({ userData, navigate }, rejectWithValue) => {
  try {
    const response = await axios.post('http://localhost:3000/users', userData)
    if (response.status === 201) { navigate("/login") }
    return response.data
  }
  catch (error) {
    rejectWithValue(error.message)
  }
})

export const login = createAsyncThunk('user/login', async ({ _, navigate }, rejectWithValue) => {
  try {
    const response = await axios.get('http://localhost:3000/users?email=" + userData.email + "&password=" + userData.password')

    navigate("/")
    return response.data
  }
  catch (error) {
    rejectWithValue(error.message)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: [


  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (_, action) => {
      return action.payload
    })
      .addCase(login.fulfilled, (_, action) => {
        return action.payload
      })
  }
});



export default userSlice.reducer