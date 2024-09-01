import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/User.Slice";
import CourseReducer from "./course/Course.Slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    user: UserReducer,
    course: CourseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
