import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <div className="w-full h-full p-4 box-border overflow-hidden rounded-lg bg-white shadow-md duration-300 ">
      {children}
    </div>
  );
};

export default Card;
