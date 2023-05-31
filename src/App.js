import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./Footer";
import Presentation from "./components/Presentation";

const App = () => {
  return (
    <>
      <Presentation />
      <Nav />
      <Main />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
