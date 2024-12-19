import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  const res = await fetch("dddddddddddd", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    [signUpUser.pending] : (state,action)=> {
        state.loading = true
    },
    [signUpUser.fulfilled] : (state,{payload: {error, msg}})=> {
        state.loading = false;
    },
    [signUpUser.rejected] : (state,action) =>{
        state.loading = true
    }
  },
});

export default authSlice.reducer;
