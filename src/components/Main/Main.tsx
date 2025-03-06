import CareerCenter from "./components/CareerCenter";
import CourseBenefits from "./components/CourseBenefits";
import CourseProgram from "./components/CourseProgram";
import CourseSpeakers from "./components/CourseSpeakers";
import LearningProgress from "./components/LearningProgress";
import StudentCases from "./components/StudentCases";

const Main = () => {
  return (
    <main className="main">
      <CourseBenefits />
      <CourseSpeakers />
      <LearningProgress />
      <StudentCases />
      <CareerCenter />
      <CourseProgram />
    </main>
  )
};

export default Main;