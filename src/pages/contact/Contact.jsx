import React from "react";
import Container from "../../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
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
              <form>
                <div className="input-box">
                  <div className="input-field">
                    <span>*Seu Nome</span>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="input-field">
                    <span>*Seu E-mail</span>
                    <input type="email" name="" id="" />
                  </div>
                  <div className="input-field">
                    <span>*Assunto</span>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="input-field">
                    <textarea name="message" id=""></textarea>
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
