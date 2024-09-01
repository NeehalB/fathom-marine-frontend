import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API, APIS } from "../../config/HttpConfigs";
import AxiosInstance from "../../config/AxiosInstance";

export const login = createAsyncThunk(
  "userlogin",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data }: { data: { token: string; message: string; data: any } } =
        await AxiosInstance.post(`${BASE_API}${APIS.login}`, userData);

      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      let errorMessage;

      if (axios.isAxiosError(error)) {
        errorMessage = error.response ? error.response.data : error.message;
      } else {
        errorMessage = error instanceof Error ? error.message : String(error);
      }

      return rejectWithValue(errorMessage);
    }
  }
);

export const addUser = createAsyncThunk(
  "Adduser",
  async (
    userData: {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await AxiosInstance.post(
        `${BASE_API}${APIS.sign_up}`,
        userData
      );
      return data;
    } catch (error) {
      let errorMessage;

      if (axios.isAxiosError(error)) {
        errorMessage = error.response ? error.response.data : error.message;
      } else {
        errorMessage = error instanceof Error ? error.message : String(error);
      }

      return rejectWithValue(errorMessage);
    }
  }
);

export const updateUserMood = createAsyncThunk(
  "UpdateUserMood",
  async (userData: { mood: string }, { rejectWithValue }) => {
    try {
      const { data } = await AxiosInstance.post(
        `${BASE_API}${APIS.mood}`,
        userData
      );
      return data;
    } catch (error) {
      let errorMessage;

      if (axios.isAxiosError(error)) {
        errorMessage = error.response ? error.response.data : error.message;
      } else {
        errorMessage = error instanceof Error ? error.message : String(error);
      }

      return rejectWithValue(errorMessage);
    }
  }
);
