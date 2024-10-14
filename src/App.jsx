import React from "react";
import Navbar from "./Components/Navbar";
import Neet from "./Components/Neet/Neet";
import Latest from "./Components/Latest/Latest";
import Icse from "./Components/ICSE/Icse";

const App = () => {
  return (
    <>
      <Navbar />
      <Latest />
      <Neet />
      <Icse/>
    </>
  );
};

export default App;
