import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Mário Soares", "Desenvolvedor Web", "Programador Fullstack"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  console.log(text);

  return (
    <>
      <div>
        <h1>
          Eu sou
          <span style={{ fontWeight: "bold", color: "green" }}> {text}</span>
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
        </h1>
      </div>
    </>
  );
}

export default Home;
