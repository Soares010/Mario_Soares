import { useEffect, useState } from "react";
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
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import {
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Li from "./Li";
import LinkButton from "./LinkButton";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

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
      path: "",
    },
    {
      id: 2,
      name: "Sobre mim",
      icon: <FontAwesomeIcon icon={faUser} />,
      path: "about",
    },
    {
      id: 3,
      name: "Projectos",
      icon: <FontAwesomeIcon icon={faFolder} />,
      path: "projects",
    },
    {
      id: 4,
      name: "Contactos",
      icon: <FontAwesomeIcon icon={faPhone} />,
      path: "contact",
    },
  ];

  return (
    <>
      <div className="social-medias">
        <div></div>
        <div className="social">
          <div>
            <a href="https://www.facebook.com/marioneto.mn">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "rgb(24, 119, 242)" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "rgb(225, 48, 108)" }}
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "rgb(24, 23, 23)" }}
              />
            </a>
          </div>
          <div>
            <a href="#">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "rgb(37, 211, 102)" }}
              />
            </a>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="image-content">
          <img src={User} alt="Eu" />
        </div>
        <div className="text-content">
          <div className="name-title">
            {show && (
              <h4>
                Eu sou <span>{text}</span>
                <span style={{ color: "#8f40e9" }}>
                  <Cursor />
                </span>
              </h4>
            )}
            <div>
              <p>
                Apaixonado por tecnologia, desenvolvimento de sistemas e
                inovação. Ao longo da minha jornada, venho me dedicando à
                criação de soluções práticas, modernas e funcionais para
                empresas e pessoas que desejam transformar ideias em realidade
                digital. Com uma forte base em desenvolvimento web e sistemas de
                gestão, domino ferramentas como React, Node.js, PHP, MySQL e
                outras tecnologias essenciais para criar interfaces intuitivas e
                sistemas robustos. Cada projeto que desenvolvo carrega minha
                marca: atenção aos detalhes, foco em performance e usabilidade.
                Acredito que um bom sistema não é apenas bonito, mas também
                eficiente, seguro e fácil de usar. Por isso, estou sempre em
                constante evolução, estudando e aplicando as melhores práticas
                do mercado. Se você busca alguém comprometido, criativo e que
                realmente se importa com o resultado final, conheça meus
                projetos e sinta-se à vontade para entrar em contato. Estou
                pronto para novos desafios
              </p>
              <div className="btn-content">
                <LinkButton href="#about" title="Sobre mim">
                  <div>Mais sobre mim</div>{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faLongArrowRight} />
                  </span>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
        <div className="nav_menu">
          <ul className="nav_list">
            {links.map(({ id, name, icon, path }) => (
              <Li className="nav_item" id={id} key={id}>
                <LinkButton href={`#${path}`} className="nav_link" title={name}>
                  <span>{icon}</span>
                </LinkButton>
              </Li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
