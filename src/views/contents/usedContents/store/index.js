// ** Redux Imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

export const getAllData = createAsyncThunk(
  "usedContents/getAllData",
  async () => {
    const response = await axios.get(
      "/api/contents/list/118413609210214538557/-1"
    );
    return response.data;
  }
);

export const getData = createAsyncThunk(
  "usedContents/getData",
  async (params) => {
    const response = await axios.get(
      "/api/contents/list/118413609210214538557/-1",
      params
    );
    return {
      params,
      data: response.data.results,
      totalPages: response.data.results.length,
    };
  }
);

export const content = createSlice({
  name: "content",
  initialState: {},
});

export default content;
