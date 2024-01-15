import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTrainDays = createAsyncThunk(
  "memberInfo/getExerciseMonths",
  async (_, { getState }) => {
    const { currentYear, currentMonth } = getState();
    const response = await axios.get(
      `/api/fit/history/months/118413609210214538557/${currentYear}/${currentMonth}`
    );
    const monthTrain = response.data.results[0].month_train;

    // 운동하지 않은 날 필터링
    const monthTrainArr = monthTrain.split(",").map(Number);
    const nonZeroIndexes = monthTrainArr
      .map((value, index) => (value !== 0 ? index : -1))
      .filter((index) => index !== -1);

    // index는 0부터 시작하므로 각 value 에 +1
    const trainDays = nonZeroIndexes.map((index) => index + 1);

    return {
      trainDays: trainDays,
    };
  }
);

export const handlePrevClick = createSlice({
  name: "handlePrevClick",
  initialState: {
    currentMonth: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    currentYear: new Date().getFullYear(),
    trainMonth: [],
  },
  reducers: {
    prevClick: (state) => {
      const { currentMonth, currentYear } = state;
      const newMonth = currentMonth > 1 ? currentMonth - 1 : 12;
      const newYear = newMonth === 12 ? currentYear - 1 : currentYear;
      return {
        ...state,
        currentMonth: newMonth.toString().padStart(2, "0"),
        currentYear: newYear,
      };
    },
  },
});

export const handleNextClick = createSlice({
  name: "handleNextClick",
  initialState: {
    currentMonth: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    currentYear: new Date().getFullYear(),
    trainMonth: [],
  },
  reducers: {
    nextClick: (state) => {
      const { currentMonth, currentYear } = state;
      const newMonth = currentMonth < 12 ? currentMonth + 1 : 1;
      const newYear = newMonth === 1 ? currentYear + 1 : currentYear;
      return {
        ...state,
        currentMonth: newMonth.toString().padStart(2, "0"),
        currentYear: newYear,
      };
    },
  },
});

export const trainMonthSlice = createSlice({
  name: "trainMonth",
  initialState: {
    currentMonth: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    currentYear: new Date().getFullYear(),
    trainMonth: [],
  },
  reducers: {
    handleTrainMonth: (state, action) => {
      state.trainMonth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrainDays.fulfilled, (state, action) => {
      state.trainMonth = action.payload.trainDays;
    });
  },
});

export const { handleTrainMonth } = trainMonthSlice.actions;
export const { prevClick } = handlePrevClick.actions;
export const { nextClick } = handleNextClick.actions;

export default trainMonthSlice.reducer;
