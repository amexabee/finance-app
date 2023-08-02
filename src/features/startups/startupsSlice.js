import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3500/business';

export const getStartups = createAsyncThunk('startup/getStartups', async () => {
  const res = await axios(url);
  return res.data;
});

export const deleteStartup = createAsyncThunk(
  'startup/deleteStartup',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(url, { data: { _id } });
      const data = response.data;
      if (data.message) throw new Error(data.message);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  startups: [],
  isLoading: true,
};

const startupsSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStartups.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStartups.fulfilled, (state, { payload: startups }) => {
      state.startups = startups;
      state.isLoading = false;
    });
    builder.addCase(getStartups.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStartup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteStartup.fulfilled, (state, { payload }) => {
      alert('hi');
      console.log(payload);
      state.startups = state.startups.filter(
        (startup) => startup._id !== payload
      );
      state.isLoading = false;
    });
    builder.addCase(deleteStartup.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default startupsSlice.reducer;
