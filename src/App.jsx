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

const App = () => {
  return (
    <>
      <Navbar />
      <Latest />
      <Neet />
      <IITJEE/>
      <CBSE/>
      <Icse/>
      <TestSolution/>
      <Olympiad/>
      <Math/>
      <Biology/>
      <General/>
      <CUET/>
      <LearnandGrow/>
      <ExamMotivation/>
    </>
  );
};

export default App;
