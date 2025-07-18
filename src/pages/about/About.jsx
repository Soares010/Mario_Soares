import React from "react";
import Container from "../../components/Container";
import expressIcon from "../../assets/images/express.png";
import csharpIcon from "../../assets/images/csharp.png";
import mysqlIcon from "../../assets/images/mysql.png";
import mongodb from "../../assets/images/mongodb.png";
import {
  faBriefcase,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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
                </div>
              </div>
              <div className="content-info">
                <div className="grid">
                  <div>
                    <h1>04+</h1>
                    <span>---- Anos de Experiência</span>
                  </div>
                  <div>
                    <h1>05+</h1>
                    <span>---- Projectos Finalizados</span>
                  </div>
                </div>
                <div className="grid">
                  <div>
                    <h1>03+</h1>
                    <span>---- Trabalhos Freelancer</span>
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
              <h4>Minhas Habilidades</h4>
              <div className="container">
                <div className="inner-content">
                  <h3>Front-end</h3>
                  <div className="grid">
                    <div>
                      <h1>80%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faHtml5}
                          style={{ color: "#E34F26", fontSize: "28px" }}
                        />
                      </span>
                      <label>HTML5</label>
                    </div>
                    <div>
                      <h1>60%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faCss3}
                          style={{ color: "#1572B6", fontSize: "28px" }}
                        />
                      </span>
                      <label>CSS3</label>
                    </div>
                  </div>
                  <div className="grid">
                    <div>
                      <h1>66%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faJs}
                          style={{ color: "#F7DF1E", fontSize: "28px" }}
                        />
                      </span>
                      <label>JS</label>
                    </div>
                    <div>
                      <h1>65%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faReact}
                          style={{ color: "#61DAFB", fontSize: "28px" }}
                        />
                      </span>
                      <label>React JS</label>
                    </div>
                  </div>
                </div>
                <div className="inner-content">
                  <h3>Back-end</h3>
                  <div className="grid">
                    <div>
                      <h1>50%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          style={{ color: "#339933", fontSize: "28px" }}
                        />
                      </span>
                      <label>Node JS</label>
                    </div>
                    <div>
                      <h1>55%</h1>
                      <span>
                        <img
                          src={expressIcon}
                          style={{
                            fontSize: "28px",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </span>
                      <label>Express JS</label>
                    </div>
                  </div>
                  <div className="grid">
                    <div>
                      <h1>80%</h1>
                      <span>
                        <FontAwesomeIcon
                          icon={faPhp}
                          style={{ color: "#777BB4", fontSize: "28px" }}
                        />
                      </span>
                      <label>PHP 8</label>
                    </div>
                    <div>
                      <h1>50%</h1>
                      <span>
                        <img
                          src={csharpIcon}
                          style={{
                            fontSize: "28px",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </span>
                      <label>C#</label>
                    </div>
                  </div>
                </div>
                <div className="inner-content">
                  <h3>Bancos de dados</h3>
                  <div className="grid">
                    <div>
                      <h1>80%</h1>
                      <span>
                        <img
                          src={mysqlIcon}
                          style={{
                            fontSize: "28px",
                            width: "40px",
                            height: "40px",
                          }}
                        />
                      </span>
                      <label>Mysql</label>
                    </div>
                    <div>
                      <h1>40%</h1>
                      <span>
                        <img
                          src={mongodb}
                          style={{
                            fontSize: "28px",
                            width: "40px",
                            height: "40px",
                          }}
                        />
                      </span>
                      <label>Mongo DB</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-gray"></div>
            <div className="experiences">
              <div className="experience-content">
                <h4 className="title-experience">Experiências & Educação</h4>
                <div className="container">
                  <div className="inner-content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faBriefcase} /> <span>2018</span>
                    </div>
                    <div className="line-gray-vertical"></div>
                    <div className="title">
                      <h4>
                        Desenvolvimento Web - <span>HTML, CSS3, JS</span>
                      </h4>
                    </div>
                    <div className="context">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti facere quaerat modi, quam exercitationem dicta
                        tenetur error distinctio rem est excepturi eaque
                        numquam, asperiores quos eos placeat laborum aliquam
                        porro?
                      </p>
                    </div>
                  </div>
                  <div className="inner-content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faBriefcase} /> <span>2018</span>
                    </div>
                    <div className="line-gray-vertical"></div>
                    <div className="title">
                      <h4>
                        Desenvolvimento Web - <span>HTML, CSS3, JS</span>
                      </h4>
                    </div>
                    <div className="context">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti facere quaerat modi, quam exercitationem dicta
                        tenetur error distinctio rem est excepturi eaque
                        numquam, asperiores quos eos placeat laborum aliquam
                        porro?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="inner-content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faBriefcase} /> <span>2018</span>
                    </div>
                    <div className="line-gray-vertical"></div>
                    <div className="title">
                      <h4>
                        Desenvolvimento Web - <span>HTML, CSS3, JS</span>
                      </h4>
                    </div>
                    <div className="context">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti facere quaerat modi, quam exercitationem dicta
                        tenetur error distinctio rem est excepturi eaque
                        numquam, asperiores quos eos placeat laborum aliquam
                        porro?
                      </p>
                    </div>
                  </div>
                  <div className="inner-content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faBriefcase} /> <span>2018</span>
                    </div>
                    <div className="line-gray-vertical"></div>
                    <div className="title">
                      <h4>
                        Desenvolvimento Web - <span>HTML, CSS3, JS</span>
                      </h4>
                    </div>
                    <div className="context">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti facere quaerat modi, quam exercitationem dicta
                        tenetur error distinctio rem est excepturi eaque
                        numquam, asperiores quos eos placeat laborum aliquam
                        porro?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
