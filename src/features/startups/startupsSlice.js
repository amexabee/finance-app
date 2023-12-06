import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3500/business';

export const getStartups = createAsyncThunk('startup/getStartups', async () => {
  const res = await axios(url);
  return res.data;
});

export const createStartup = createAsyncThunk(
  'startup/createStartup',
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, body);
      const data = response.data;
      // getStartups();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteStartup = createAsyncThunk(
  'startup/deleteStartup',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = axios.delete(url, { data: { _id } });
      const data = response.data;
      if (data?.message) throw new Error(data.message);
      return _id;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  startups: [],
  isLoading: true,
  error: null,
};

const startupsSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStartups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStartups.fulfilled, (state, { payload: startups }) => {
        state.startups = startups;
        state.isLoading = false;
      })
      .addCase(getStartups.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createStartup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createStartup.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createStartup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteStartup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStartup.fulfilled, (state, { payload: deletedId }) => {
        state.startups = state.startups.filter(
          (startup) => startup._id !== deletedId
        );
        state.isLoading = false;
      })
      .addCase(deleteStartup.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setError } = startupsSlice.actions;

export default startupsSlice.reducer;
