import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3500/business';

export const getStartups = createAsyncThunk('', async () => {
  const res = await fetch(url);
  return res.json();
});

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
  },
});

export default startupsSlice.reducer;
