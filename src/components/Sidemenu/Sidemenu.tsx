import { useEffect, useState } from "react";
import { LoginScreenText } from "../../screens/login/loginEnum";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface IMenuOptions {
  icon: JSX.Element;
  label: string;
  path: string;
  optionKey: string;
}

const Sidemenu: React.FC = () => {
  const menuOptions: IMenuOptions[] = [
    {
      icon: <MdOutlineSpaceDashboard className="text-3xl" />,
      label: "Dashboard",
      path: "",
      optionKey: "dashboard",
    },
    {
      icon: <IoBookOutline className="text-3xl" />,
      label: "Course",
      path: "/course",
      optionKey: "course",
    },
  ];

  const [selected, setSelected] = useState<string>();
  const navigate = useNavigate();

  const handleOptionClick = (key: string, path: string) => {
    setSelected(key);
    navigate(path);
  };

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (path[1] === "") {
      return setSelected("dashboard");
    }
    setSelected(path[1]);
  }, []);

  const MenuOption: React.FC<IMenuOptions> = ({
    optionKey,
    icon,
    label,
    path,
  }) => {
    return (
      <div
        className={`w-full p-4 box-border rounded-md ${
          selected === optionKey && "text-violet-800"
        } flex items-center gap-5 mb-4 hover:bg-violet-100 cursor-pointer`}
        onClick={() => handleOptionClick(optionKey, path)}
      >
        {icon}
        <p className="flex-grow text-lg">{label}</p>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center mb-10">
        <img
          className="max-h-48"
          src="/media/logo.png"
          alt={LoginScreenText.LOGO_ALT}
        />
      </div>
      {menuOptions.map((option, index: number) => {
        return (
          <MenuOption
            key={index}
            optionKey={option.optionKey}
            icon={option.icon}
            label={option.label}
            path={option.path}
          />
        );
      })}
    </div>
  );
};

export default Sidemenu;
