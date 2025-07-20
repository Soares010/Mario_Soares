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
      description: `Sistema completo para auxiliar farmácias no 
      controle de estoque, vendas, entrada de produtos, histórico
      de clientes e geração de relatórios. Desenvolvido com foco em
      usabilidade e performance, permite à farmácia manter uma gestão
      eficiente e moderna dos seus recursos, com acesso rápido às informações
       e funcionalidades práticas para o dia a dia.`,
    },
    {
      id: 2,
      img: systemUniversity,
      link: "",
      name: "Sistema de Gestão Universitária",
      description: `Plataforma robusta voltada para 
      instituições de ensino superior, permitindo o
      gerenciamento de estudantes, cursos, disciplinas,
      notas, pagamentos e relatórios acadêmicos. O sistema
      facilita a comunicação entre alunos, professores e administração,
      promovendo organização, eficiência e centralização das informações acadêmicas.`,
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
      description: `Protótipo de website institucional para um banco,
      com layout moderno, navegação intuitiva e foco na apresentação
      de serviços financeiros. O projeto simula uma experiência real de
      acesso a informações bancárias, como abertura de conta, simulação de
      crédito e serviços online, reforçando conceitos de design, segurança e
      experiência do usuário.`,
    },
    {
      id: 5,
      img: calc,
      link: "",
      name: "Calculadora",
      description: `Calculadora funcional e interativa,
       desenvolvida com JavaScript para realizar operações
       matemáticas básicas como soma, subtração, multiplicação e
       divisão. Ideal como projeto de lógica e DOM, com interface amigável `,
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
      description: `Jogo de adivinhas criado com HTML CSS JS, onde o usuário escolhe 
      um número entre 0 à 20, e caso este número corresponda ao da adivinha ele soma o score
      do jogador, caso seja o contrário e ele esgotar o total de tentativas uma mensagem de você perdeu
      aparece para o mesmo!`,
    },
    {
      id: 8,
      img: systemSchool,
      link: "",
      name: "Sistema de Gestão Escolar",
      description: `Plataforma desenvolvida para escolas 
      ensino básico ou médio, permitindo o gerenciamento de alunos,
      turmas, professores, notas, presenças e mensalidades. O sistema
      automatiza tarefas administrativas, facilita o acompanhamento
      pedagógico e oferece um painel intuitivo para que gestores, professores
      e responsáveis tenham acesso rápido às informações mais importantes do ambiente escolar.`,
    },
    {
      id: 9,
      img: modal,
      link: "",
      name: "Modal",
      description: `Criei três tipos de modal, com o intuito 
      de praticar e quem sabe futuramente aplicar em alguns do meus projectos!`,
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
