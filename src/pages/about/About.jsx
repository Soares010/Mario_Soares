import React from "react";
import Container from "../../components/Container";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <Container>
        <div id="about">
          <div className="title">
            <h2>
              + Sobre <span>mim</span>
            </h2>
          </div>
          <div className="main">
            <div className="my-info">
              <div className="content-info">
                <div className="content">
                  <div className="inner-text">
                    <h4>Informações pessoais</h4>
                  </div>
                  <div>
                    <span>
                      Primeiro Nome: <label>Mário</label>{" "}
                    </span>
                  </div>
                  <div>
                    <span>
                      Segundo Nome: <label>Soares</label>
                    </span>
                  </div>
                  <div>
                    <span>
                      Idade: <label>24 anos de idade</label>
                    </span>
                  </div>
                  <div>
                    <span>
                      Telefone: <label>+244 927 025 790</label>
                    </span>
                  </div>
                  <div className="btn-download">
                    <a href="#">
                      Download CV
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faLongArrowRight} />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div>
                    <span>
                      Endereço: <label>Camama 1 / Jardins do Éden</label>{" "}
                    </span>
                  </div>
                  <div>
                    <span>
                      Nacionalidade: <label>Angolana</label>
                    </span>
                  </div>
                  <div>
                    <span>
                      E-mail: <label>Mariosoares20012005@gmail.com</label>
                    </span>
                  </div>
                  <div>
                    <span>
                      {/* Telefone: <label>+244 927 025 790</label> */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="content-info">
                <div className="grid">
                  <div>
                    <h1>12+</h1>
                    <span>---- Anos de experiência</span>
                  </div>
                  <div>
                    <h1>12+</h1>
                    <span>---- Anos de experiência</span>
                  </div>
                </div>
                <div className="grid">
                  <div>
                    <h1>12+</h1>
                    <span>---- Anos de experiência</span>
                  </div>
                  <div>
                    <h1>12+</h1>
                    <span>---- Anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-gray"></div>
            <div className="my-skills">
              1
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
