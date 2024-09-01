import Card from "../../components/Cards/Card";
import DoghnutChart from "../../components/Chart/DoghnutChart";
import MoodTracking from "../../components/Dropdown/MoodTracking";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateUserMood } from "../../store/user/User.Actions";
import { UserState } from "../../store/user/User.Slice";
import { DashboardText } from "./DashboardEnum";

const DashboardScreen = () => {
  const userDispatch = useAppDispatch();
  const userData = useAppSelector((state: { user: UserState }) => state.user);

  const moodHandler = (mood: string) => {
    userDispatch(updateUserMood({ mood }));
  };

  return (
    <div className="w-full h-full">
      <Card>
        <h1 className="text-center text-3xl font-semibold text-violet-800">
          {DashboardText.WELCOME_TEXT}
        </h1>
        <div className="w-full mt-10 flex justify-evenly gap-5 h-1/2">
          <MoodTracking
            moodHandler={moodHandler}
            mood={userData.user.data?.mood}
          />

          <DoghnutChart />
        </div>
      </Card>
    </div>
  );
};

export default DashboardScreen;
