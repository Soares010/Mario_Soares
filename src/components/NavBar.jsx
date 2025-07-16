import React, { useState } from "react";
import "../assets/styles/NavBar.css";
import {
  faBars,
  faProjectDiagram,
  faUser,
  faHomeAlt,
  faFolder,
  faPhone,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import User from "../assets/images/eu.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [text] = useTypewriter({
    words: ["Mário Soares", "Desenvolvedor Web", "Programador Fullstack"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const links = [
    {
      id: 1,
      name: "Home",
      icon: <FontAwesomeIcon icon={faHomeAlt} />,
      path: "/",
    },
    {
      id: 2,
      name: "Sobre mim",
      icon: <FontAwesomeIcon icon={faUser} />,
      path: "/about",
    },
    {
      id: 3,
      name: "Projectos",
      icon: <FontAwesomeIcon icon={faFolder} />,
      path: "/projects",
    },
    {
      id: 4,
      name: "Contactos",
      icon: <FontAwesomeIcon icon={faPhone} />,
      path: "/contact",
    },
  ];
  return (
    <>
      <nav className="nav">
        <div className="image-content">
          <img src={User} alt="Eu" />
        </div>
        <div className="text-content">
          <div className="name-title">
            <h4>
              Eu sou <span>{text}</span>
              <span style={{ color: "#8f40e9" }}>
                <Cursor />
              </span>
            </h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem accusamus veritatis voluptates iure eum
                necessitatibus, dolores perspiciatis praesentium a iste repellat
                consequatur obcaecati nostrum, expedita facilis ex atque quam
                distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolorum suscipit ex eius perspiciatis, corrupti, fugit
                expedita eos sint id ipsa incidunt? Error facilis iste maxime
                natus officiis sunt! Architecto, nam.
              </p>
              <div className="btn-content">
                <button>
                  <div>Mais sobre min</div>{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faLongArrowRight} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="nav_menu">
          <ul className="nav_list">
            {links.map(({ id, name, icon, path }) => (
              <li className="nav_item" key={id}>
                <a href={`#${path}`} className="nav_link" title={name}>
                  <span>{icon}</span>
                  {/* <h4>{name}</h4> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
