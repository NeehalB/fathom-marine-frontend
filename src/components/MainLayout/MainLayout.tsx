import { Outlet } from "react-router-dom";
import Sidemenu from "../Sidemenu/Sidemenu";
import Logout from "../Button/Logout";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex box-border">
      <div className="w-1/6 max-w-xs h-full box-border px-4">
        <Sidemenu />
      </div>
      <div className="h-full flex-grow flex flex-col">
        <div className="h-14 max-h-14 box-border flex justify-end items-center">
          <Logout />
        </div>
        <div className="flex-grow box-border p-4 bg-slate-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
