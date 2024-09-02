import { useEffect } from "react";
import Card from "../../components/Cards/Card";
import DoghnutChart from "../../components/Chart/DoghnutChart";
import MoodTracking from "../../components/Dropdown/MoodTracking";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  updateUserMood,
  getDashboardData,
} from "../../store/user/User.Actions";
import { UserState } from "../../store/user/User.Slice";

const DashboardScreen = () => {
  const userDispatch = useAppDispatch();
  const userData = useAppSelector((state: { user: UserState }) => state.user);

  useEffect(() => {
    userDispatch(getDashboardData());
  }, [userDispatch]);

  const moodHandler = (mood: string) => {
    userDispatch(updateUserMood({ mood }));
  };

  return (
    <div className="w-full h-full">
      <Card>
        <div className="max-h-96">
          <img
            src="/media/meditation.png"
            alt="People meditating"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="w-full mt-10 flex justify-evenly gap-5 h-1/2">
          {userData && userData.dashboard && (
            <MoodTracking
              moodHandler={moodHandler}
              mood={userData.dashboard.mood}
            />
          )}

          {!userData.isDashboardLoading && userData.dashboard && (
            <DoghnutChart data={userData.dashboard} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default DashboardScreen;
