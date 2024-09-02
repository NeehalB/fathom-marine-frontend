import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
  overflowAllow?: boolean;
}

const Card: React.FC<ICardProps> = ({ children, overflowAllow = false }) => {
  return (
    <div
      className={`w-full h-full p-4 box-border ${
        overflowAllow ? "overflow-auto" : "overflow-hidden"
      } rounded-lg bg-white shadow-md duration-300 `}
    >
      {children}
    </div>
  );
};

export default Card;
