import React from "react";
import NavBar from "../../components/NavBar";
import About from "../about/About";
import Projects from "../projects/Projects";

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Home;
