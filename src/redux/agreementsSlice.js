import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/agreements";

// Thunks
export const fetchAgreements = createAsyncThunk("agreements/fetchAll", async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});

export const addAgreement = createAsyncThunk("agreements/add", async (agreement) => {
  const response = await axios.post(API_BASE_URL, agreement);
  return response.data;
});

const agreementsSlice = createSlice({
  name: "agreements",
  initialState: { agreements: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgreements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAgreements.fulfilled, (state, action) => {
        state.agreements = action.payload;
        state.loading = false;
      })
      .addCase(fetchAgreements.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default agreementsSlice.reducer;
