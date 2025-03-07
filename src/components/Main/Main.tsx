import CareerCenter from "./components/CareerCenter";
import CourseBenefits from "./components/CourseBenefits";
import CoursePricing from "./components/CoursePricing";
import CourseProgram from "./components/CourseProgram";
import CourseSpeakers from "./components/CourseSpeakers";
import ExpertHub from "./components/ExpertHub";
import Form from "./components/Form";
import LearningProgress from "./components/LearningProgress";
import Raview from "./components/Raview";
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
      <ExpertHub />
      <CoursePricing />
      <Raview />
      <Form />
    </main>
  )
};

export default Main;