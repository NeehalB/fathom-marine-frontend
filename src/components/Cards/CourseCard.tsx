import { useNavigate } from "react-router-dom";

interface ICourseCardProps {
  title: string;
  link: string;
  id: string;
  handleWatchedVideo: (id: string) => void;
}

const CourseCard: React.FC<ICourseCardProps> = ({
  title,
  link,
  id,
  handleWatchedVideo,
}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/player", { state: { title, link, id } });
    handleWatchedVideo(id);
  };

  return (
    <div
      className="w-full h-full p-4 box-border overflow-hidden rounded-lg bg-white shadow-md duration-300 cursor-pointer flex flex-col justify-center items-center whitespace-normal"
      onClick={onClickHandler}
    >
      <p className="text-center mb-5 font-semibold">{title}</p>
      <p className="text-center">Click to watch the video</p>
    </div>
  );
};

export default CourseCard;
