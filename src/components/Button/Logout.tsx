import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <IoIosLogOut
      className="text-3xl text-red-800 mr-6 cursor-pointer"
      onClick={() => {
        localStorage.clear();
        navigate("/login");
      }}
    />
  );
};

export default Logout;
