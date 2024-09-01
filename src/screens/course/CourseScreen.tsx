import Card from "../../components/Cards/Card";
import CourseCard from "../../components/Cards/CourseCard";
import { CourseScreenText } from "./CourseEnum";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { CourseState } from "../../store/course/Course.Slice";
import { useEffect } from "react";
import { getAllCourses } from "../../store/course/Course.Action";

const CourseScreen = () => {
  const courseDispatch = useAppDispatch();
  const courseData = useAppSelector(
    (state: { course: CourseState }) => state.course
  );

  useEffect(() => {
    courseDispatch(getAllCourses());
  }, [courseDispatch]);

  return (
    <div className="w-full h-full">
      <Card>
        <h1 className="text-center text-3xl font-semibold text-violet-800 mb-10">
          {CourseScreenText.HEADER}
        </h1>
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
