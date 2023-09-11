import emailjs from "@emailjs/browser";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useRef } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import ContactItem from "../Components/ContactItem";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import { InnerLayout } from "../styles/Layout";

function ContactPage({ t }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessages",
        "template_60nfeyj",
        form.current,
        "user_Tl8yQREl3GPLOVs64S2eD"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <>
      <Title title={t("Contact")} span={t("Contact")} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>{t("Contact Me")}</h4>
            </div>
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">{t("Name*")}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">{t("Subject*")}</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">{t("Your message*")}</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={t("Send Email")} type="submit" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={t("Phone")}
              icon={phone}
              cont={"+55 (31) 9-9868-0878"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont={"juliano.lima.marques@outlook.com"}
            />
            <ContactItem
              title={t("Address")}
              icon={location}
              cont={"30530-290"}
              adress={"João Pinheiro, Belo Horizonte, Brasil "}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default withTranslation()(ContactPage);
