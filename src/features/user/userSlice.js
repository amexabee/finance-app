import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3500/users';

export const setUser = createAsyncThunk(
  'user/setUser',
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await axios.post(url + requestData.path, requestData, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = response.data;
      if (data.message) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {},
  isLoading: true,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = {};
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(setUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(setUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { logOut, setError } = userSlice.actions;

export default userSlice.reducer;
