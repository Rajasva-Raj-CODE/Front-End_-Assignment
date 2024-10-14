import React from "react";
import Navbar from "./Components/Navbar";
import Neet from "./Components/Neet/Neet";
import Latest from "./Components/Latest/Latest";
import Icse from "./Components/ICSE/Icse";
import CBSE from "./Components/CBSE/CBSE";
import IITJEE from "./Components/IIT-JEE/IITJEE";
import TestSolution from "./Components/TestSolution/TestSolution";
import Olympiad from "./Components/Olympiad/Olympiad";
import Math from "./Components/Maths/Math";
import Biology from "./Components/Biology/Biology";
import General from "./Components/General/General";
import CUET from "./Components/CUET/CUET";
import LearnandGrow from "./Components/Learn-and-Grow/LearnandGrow";
import ExamMotivation from "./Components/exam-motivation/ExamMotivation";
import Poster from "./Components/Poster";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/common/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="sm:pl-[150px] pl-10 pr-10 sm:pr-[474px]">
        <Poster />
        <Latest />
        <Neet />
        <IITJEE />
        <CBSE />
        <Icse />
        <TestSolution />
        <Olympiad />
        <Math />
        <Biology />
        <General />
        <CUET />
        <LearnandGrow />
        <ExamMotivation />
        {/* <Card /> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
