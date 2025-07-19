import React from "react";
import Container from "../../components/Container";
import bank from "../../assets/images/banco.png";
import guess from "../../assets/images/adivinha.png";
import dice from "../../assets/images/dados.png";
import dashboard from "../../assets/images/dash.png";
import calc from "../../assets/images/calculadora.png";
import modal from "../../assets/images/modal.png";
import systemSchool from "../../assets/images/se.png";
import payment from "../../assets/images/pagamento.png";
import systemUniversity from "../../assets/images/su.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: dashboard,
      link: "",
      name: "Sistem de Gestão de Farmácias",
      description: "",
    },
    {
      id: 2,
      img: systemUniversity,
      link: "",
      name: "Sistema de Gestão Universitária",
      description: "",
    },
    {
      id: 3,
      img: payment,
      link: "",
      name: "Sistema de Controle de Propinas",
      description: "",
    },
    {
      id: 4,
      img: bank,
      link: "",
      name: "Website Institucional Bancário",
      description: "",
    },
    {
      id: 5,
      img: calc,
      link: "",
      name: "Calculadora",
      description: "",
    },
    {
      id: 6,
      img: dice,
      link: "",
      name: "Jogo do dado",
      description: "",
    },
    {
      id: 7,
      img: guess,
      link: "",
      name: "Jogo de advinhas",
      description: "",
    },
    {
      id: 8,
      img: systemSchool,
      link: "",
      name: "Sistema de Gestão Escolar",
      description: "",
    },
    {
      id: 9,
      img: modal,
      link: "",
      name: "Modal",
      description: "",
    },
  ];

  return (
    <>
      <Container>
        <div id="projects">
          <div className="title">
            <h2>
              Meus <span>Projectos</span>
            </h2>
          </div>

          <div className="inner-content">
            <div className="content">
              {projects.map(({ id, img, link, name, description }) => (
                <div className="content-box" key={id}>
                  <div className="card">
                    {img && (
                      <img
                        src={img}
                        alt={name}
                        className="card-image"
                        style={{ width: "400px" }}
                      />
                    )}
                    <h3>{name}</h3>
                    {description && <p>{description}</p>}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
