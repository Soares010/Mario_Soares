import React from "react";
import NavBar from "../../components/NavBar";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default Home;
