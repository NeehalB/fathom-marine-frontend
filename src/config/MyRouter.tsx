import { createBrowserRouter } from "react-router-dom";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SignupScreen from "../screens/signup/SignupScreen";
import Authwrapper from "./Authwrapper";
import CourseScreen from "../screens/course/CourseScreen";
import PlayerScreen from "../screens/player/PlayerScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authwrapper />,
    children: [
      {
        path: "/",
        element: <DashboardScreen />,
      },
      {
        path: "/course",
        element: <CourseScreen />,
      },
      {
        path: "/player",
        element: <PlayerScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/sign_up",
    element: <SignupScreen />,
  },
]);

export default router;
