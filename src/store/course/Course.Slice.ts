import { createSlice } from "@reduxjs/toolkit";
import { getAllCourses } from "./Course.Action";

export interface CourseState {
  course: { data: any[] };
  isLoading: boolean;
}

const initialState: CourseState = {
  course: { data: [] },
  isLoading: false,
};

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.course = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCourses.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default CourseSlice.reducer;
