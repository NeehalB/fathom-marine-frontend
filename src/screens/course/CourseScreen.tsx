import Card from "../../components/Cards/Card";
import CourseCard from "../../components/Cards/CourseCard";
import { CourseScreenText } from "./CourseEnum";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { CourseState } from "../../store/course/Course.Slice";
import { useEffect, useRef } from "react";
import { getAllCourses } from "../../store/course/Course.Action";
import { updateWatchedVideo } from "../../store/user/User.Actions";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useSearchParams } from "react-router-dom";

const CourseScreen = () => {
  const courseDispatch = useAppDispatch();
  const courseData = useAppSelector(
    (state: { course: CourseState }) => state.course
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const timeoutRef: React.MutableRefObject<ReturnType<
    typeof setTimeout
  > | null> = useRef(null);

  useEffect(() => {
    courseDispatch(getAllCourses({ search: searchParams.get("search") || "" }));
  }, [courseDispatch, searchParams]);

  const handleWatchedVideo = (id: string) => {
    courseDispatch(updateWatchedVideo({ id }));
  };

  const handleSearch = (searchString: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (searchString === "") {
        setSearchParams((params) => {
          params.delete("search");
          return params;
        });
        return;
      }

      setSearchParams((params) => {
        params.set("search", searchString);
        return params;
      });
    }, 300);
  };

  return (
    <div className="w-full h-full">
      <Card overflowAllow={true}>
        <h1 className="text-center text-3xl font-semibold text-violet-800 mb-10">
          {CourseScreenText.HEADER}
        </h1>
        <div className="w-full flex justify-center mb-5">
          <Searchbar handleSearch={handleSearch} />
        </div>

        {courseData.isLoading && <p>....Loading</p>}
        {courseData &&
          courseData.course &&
          courseData.course.data &&
          courseData.course.data.length > 0 && (
            <div className="w-full grid grid-cols-3 gap-10">
              {courseData.course.data.map((testData, index: number) => {
                return (
                  <CourseCard
                    key={index}
                    title={testData.title}
                    link={testData.link}
                    id={testData._id}
                    handleWatchedVideo={handleWatchedVideo}
                  />
                );
              })}
            </div>
          )}
      </Card>
    </div>
  );
};

export default CourseScreen;
