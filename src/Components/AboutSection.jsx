import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import curriculo from "../assets/curriculo-juliano-lima-marques.pdf";
import ControlledCarousel from "./Carousel";
import PrimaryButton from "./PrimaryButton";

function AboutSection() {
  return (
    <AboutSectionStyled>
      <div className="left-content">
        <h3>
          {t("myNameIs")} <span>Juliano</span>
        </h3>
        <p className="paragraphy">{t("myDescription")}</p>
        <div className="about-info">
          <div className="info-title">
            <p>{t("FullName")}</p>
            <p>{t("Age")}</p>
            <p>{t("Nationallity")}</p>
            <p>{t("Languages")}</p>
            <p>{t("Location")}</p>
            <p>{t("Service")}</p>
          </div>
          <div className="info">
            <p>: Juliano Lima Marques</p>
            <p>: 22</p>
            <p>: {t("Brazillian")} </p>
            <p>: {t("Portuguese/ English/ French")} </p>
            <p>: Belo Horizonte, Brasil</p>
            <p>: {t("Web Developer")} </p>
          </div>
        </div>
        <a href={curriculo} download>
          <PrimaryButton title={t("curriculumButton")} className="button" />
        </a>
      </div>
      <div className="right-content">
        <h3>
          {t("My")} <span>Hobbies</span>
        </h3>
        <p className="paragraphy"> {t("Hobbies")}</p>
        <ControlledCarousel />
      </div>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.div`
  @media screen and (max-width: 1213px) {
    flex-direction: column;
  }
  margin: 2rem;
  display: flex;
  .button {
    margin: 0 auto;
  }
  .paragraphy {
    padding: 1rem;
  }
  .right-content {
    margin-top: 2rem;
    width: 100%;
    h3 {
      text-align: center;
      font-size: 1.5rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    img {
      width: 80%;
      object-fit: cover;
    }
  }
  .left-content {
    width: 100%;
    margin-top: 2rem;
    h3 {
      text-align: center;
      font-size: 1.5rem;
      color: var(--white-color);
      span {
        font-size: 1.5rem;
        color: var(--primary-color);
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      padding: 1rem;
      .info-title {
        color: var(--white-color);
        p {
          font-weight: 600;
          @media screen and (max-width: 480px) {
            font-size: 0.8rem;
            white-space: nowrap;
          }
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          @media screen and (max-width: 480px) {
            font-size: 0.8rem;
            white-space: nowrap;
          }
        }
        padding: 1rem 0;
      }
    }
  }
`;

export default withTranslation()(AboutSection);
