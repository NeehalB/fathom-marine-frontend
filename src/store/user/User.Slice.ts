import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  addUser,
  updateUserMood,
  updateWatchedVideo,
  getDashboardData,
} from "./User.Actions";

export interface UserState {
  user: {
    token: string;
    message: string;
    data: any;
  };
  dashboard: {
    watchedVideo: number;
    unwatchedVideo: number;
    mood: string;
  };
  isLoading: boolean;
  isDashboardLoading: boolean;
  loginStatus: boolean;
}

const initialState: UserState = {
  user: {
    token: "",
    message: "",
    data: {},
  },
  dashboard: {
    watchedVideo: 0,
    unwatchedVideo: 0,
    mood: "",
  },
  isLoading: false,
  loginStatus: false,
  isDashboardLoading: false,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.loginStatus = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.loginStatus = false;
    });
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(addUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserMood.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserMood.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUserMood.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateWatchedVideo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateWatchedVideo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateWatchedVideo.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getDashboardData.pending, (state) => {
      state.isDashboardLoading = true;
    });
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      state.isDashboardLoading = false;
      state.dashboard = action.payload;
    });
    builder.addCase(getDashboardData.rejected, (state) => {
      state.isDashboardLoading = false;
    });
  },
});

export default UserSlice.reducer;
