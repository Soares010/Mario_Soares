import React from "react";
import "../assets/styles/Section.css";

const Section = () => {
  return (
    <div>
      <section className="main">
        <div className="container">
          <div id="about">about</div>
          <div id="projects">projects</div>
          <div id="contact">contact</div>
        </div>
      </section>
    </div>
  );
};

export default Section;
