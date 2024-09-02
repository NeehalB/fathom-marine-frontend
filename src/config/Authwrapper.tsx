import { Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

const Authwrapper = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <MainLayout />;
};

export default Authwrapper;
