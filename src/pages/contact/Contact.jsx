import React, { useState } from "react";
import Container from "../../components/Container";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChangeInput(e) {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  }

  function handleSubmitData(e) {
    e.preventDefault();
    const serviceId = "soaresservice10";
    const templateId = "soares_10";
    const apiPublicKey = "3qxeZrbzyEgTygebO";

    emailjs
      .send(serviceId, templateId, data, apiPublicKey)
      .then((response) => {
        console.log("enviado!" + response.status, response.text);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Container>
        <div id="contact">
          <div className="title">
            <h2>
              Contacte <span>-me</span>
            </h2>
          </div>
          <div className="container">
            <div className="content">
              <div className="inner-text">
                <h4>Não seja tímido!</h4>
                <p>
                  Tem uma ideia em mente, um projeto para tirar do papel ou quer
                  simplesmente trocar uma ideia sobre tecnologia? Estou sempre
                  aberto a novas conexões, parcerias e oportunidades
                  desafiadoras. Se você se identificou com meu trabalho ou
                  acredita que posso ajudar de alguma forma, não hesite em me
                  chamar. Seja um e-mail, uma ligação ou até mesmo um "olá",
                  será um prazer conversar com você!
                </p>
              </div>
              <div className="inner-contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faMailBulk} className="icon-contact" />
                  <div>
                    <span>Envie-me um e-mail</span>
                  </div>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} className="icon-contact" />
                  <div>
                    <span>Ligue para mim</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <form onSubmit={handleSubmitData}>
                <div className="input-box">
                  <div className="input-field">
                    <span>*Seu Nome</span>
                    <input
                      type="text"
                      name="name"
                      id=""
                      onChange={(e) => handleChangeInput(e)}
                    />
                  </div>
                  <div className="input-field">
                    <span>*Seu E-mail</span>
                    <input
                      type="email"
                      name="email"
                      id=""
                      onChange={(e) => handleChangeInput(e)}
                    />
                  </div>
                  <div className="input-field">
                    <span>*Assunto</span>
                    <input
                      type="text"
                      name="subject"
                      id=""
                      onChange={(e) => handleChangeInput(e)}
                    />
                  </div>
                  <div className="input-field">
                    <textarea
                      name="message"
                      id=""
                      onChange={(e) => handleChangeInput(e)}
                    ></textarea>
                    <div className="button-send">
                      <button>
                        Enviar a mensagem
                        <span>
                          <FontAwesomeIcon icon={faLongArrowRight} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
