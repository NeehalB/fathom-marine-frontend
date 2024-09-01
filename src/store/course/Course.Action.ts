import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API, APIS } from "../../config/HttpConfigs";
import AxiosInstance from "../../config/AxiosInstance";

export const getAllCourses = createAsyncThunk(
  "courseData",
  async (_args, { rejectWithValue }) => {
    try {
      const { data } = await AxiosInstance.get(`${BASE_API}${APIS.course}`);

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
