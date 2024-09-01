import { createSlice } from "@reduxjs/toolkit";
import { login, addUser, updateUserMood } from "./User.Actions";

export interface UserState {
  user: {
    token: string;
    message: string;
    data: any;
  };
  isLoading: boolean;
  loginStatus: boolean;
}

const initialState: UserState = {
  user: { token: "", message: "", data: {} },
  isLoading: false,
  loginStatus: false,
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
  },
});

export default UserSlice.reducer;
