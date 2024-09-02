import { useLocation } from "react-router-dom";
import Card from "../../components/Cards/Card";

const PlayerScreen = () => {
  const { state } = useLocation();

  return (
    <div className="w-full h-full">
      <Card>
        <iframe
          className="w-full h-3/4"
          src={state.link}
          allowFullScreen={true}
        />
        <p className="font-semibold mt-5 text-3xl">{state.title}</p>
      </Card>
    </div>
  );
};

export default PlayerScreen;
