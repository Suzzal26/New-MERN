import React from "react";
import About from "./pages/About";
/* import Home from "./pages/Home"; */
/* import Contact from "./pages/Contact"; */
import Haha from "./pages/Haha";
import Hehe from "./pages/Hehe";
/* import Question from "./pages/Question"; */
import Question_Alternative from "./pages/Question_Alternative";
import UseEff from "./pages/UseEff";
import Timer from "./pages/Timer";
import Test from "./pages/Test";
/* import SearchWithEffect from "./pages/SearchWithEffect"; */

const App = () => {
  return (
    <>
      {/*    <Home /> */}
      <hr />
      <About title="Suzzal" description="Suzzal is present" />
      <hr />
      {/* <Contact /> */}
      <hr />
      <Haha />
      <hr />
      <Hehe />
      <hr />
      {/*  <Question /> */}
      <hr />
      <Question_Alternative />
      <hr />
      <Test />
      <hr />
      <Timer />
      <hr />
      {/* <SearchWithEffect /> */}
      <hr />
      <UseEff />
    </>
  );
};

export default App;
