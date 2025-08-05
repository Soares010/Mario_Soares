import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLongArrowRight,
  faMailBulk,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Message from "../../components/Message";
import Button from "../../components/Button";

const Contact = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const notify = () => {
      if (success !== "") {
        toast.success(success, {
          duration: 2000,
          position: "bottom-right",
          icon: <FontAwesomeIcon icon={faCheck} style={{ color: "#00FF00" }} />,
          removeDelay: 1000,
        });
        const timeout = setTimeout(() => setSuccess(""), 2000);
        return () => clearTimeout(timeout);
      }

      if (error !== "") {
        toast.error(error, {
          duration: 2000,
          position: "bottom-right",
          icon: <FontAwesomeIcon icon={faXmark} style={{ color: "#FF0000" }} />,
          removeDelay: 1000,
        });
        const timeout = setTimeout(() => setError(""), 2000);
        return () => clearTimeout(timeout);
      }
    };
    notify();
  }, [success, error]);

  function handleChangeInput(e) {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmitData(e) {
    e.preventDefault();
    const serviceId = "soaresservice10";
    const templateId = "soares_10";
    const apiPublicKey = "3qxeZrbzyEgTygebO";

    if (!data.name?.trim() || !data.subject?.trim() || !data.message?.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    emailjs
      .send(serviceId, templateId, data, apiPublicKey)
      .then((response) => {
        setSuccess("E-mail enviado com sucesso!");
      })
      .catch((error) => setError("Ocorreu um erro ao enviar e-mail!"));
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
              <Form submit={handleSubmitData}>
                <div className="input-box">
                  <div className="input-field">
                    <span>*Seu Nome</span>
                    <Input
                      type="text"
                      name="name"
                      handleChange={handleChangeInput}
                      required="required"
                    />
                  </div>
                  <div className="input-field">
                    <span>*Seu E-mail</span>
                    <Input
                      type="email"
                      name="email"
                      required="required"
                      handleChange={handleChangeInput}
                    />
                  </div>
                  <div className="input-field">
                    <span>*Assunto</span>
                    <Input
                      type="text"
                      name="subject"
                      required="required"
                      handleChange={handleChangeInput}
                    />
                  </div>
                  <div className="input-field">
                    <Message
                      name="message"
                      handleChange={handleChangeInput}
                      required="required"
                    />
                    <div className="button-send">
                      <Button>
                        Enviar a mensagem
                        <span>
                          <FontAwesomeIcon icon={faLongArrowRight} />
                        </span>
                      </Button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
