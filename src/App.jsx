import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Poster from "./Components/Poster";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList";
import {
  Biologydata,
  CBSEdata,
  ExamMotivationData,
  cuetData,
  generaldata,
  IcseData,
  iitJeeData,
  latestdata,
  learnandgrowData,
  Mathdata,
  neetdata,
  Olympiaddata,
  TestSolutionData,
} from "./Components/data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="sm:pl-[150px] pl-10 pr-10 sm:pr-[474px]">
        <Poster />
        <CardList heading="Latest" cardsData={latestdata} />
        <CardList heading="NEET" cardsData={neetdata} />
        <CardList heading="IIT-JEE" cardsData={iitJeeData} />
        <CardList heading="CBSE" cardsData={CBSEdata} />
        <CardList heading="ICSE" cardsData={IcseData} />
        <CardList heading="Text-Solution" cardsData={TestSolutionData} />
        <CardList heading="Olympiad" cardsData={Olympiaddata} />
        <CardList heading="Maths" cardsData={Mathdata} />
        <CardList heading="Biology" cardsData={Biologydata} />
        <CardList heading="General" cardsData={generaldata} />
        <CardList heading="CUET" cardsData={cuetData} />
        <CardList heading="Learn-and-Grow" cardsData={learnandgrowData} />
        <CardList heading="exam-motivation" cardsData={ExamMotivationData} />
      </div>
      <Footer />
    </>
  );
};

export default App;
