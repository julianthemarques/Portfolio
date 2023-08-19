import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Particle from "../Components/Particle";
import PrimaryButton from "../Components/PrimaryButton";
import curriculo from "../assets/curriculo-juliano-lima-marques.pdf";

function HomePage({ t, particlesColor }) {
  return (
    <HomePageStyled>
      <div className="particles-home-page">
        <Particle particlesColor={particlesColor} />
      </div>
      <div className="typography">
        <h1>
          {t("helloHome")} <span className="name-span">Julian</span>
        </h1>
        <p>
          <Typewriter
            options={{
              loop: true,
              strings: [t("apresentation"), t("takeALook")],
              autoStart: true,
            }}
          />
        </p>
        <div className="icons">
          <a
            href="https://github.com/julianthemarques"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/juliano-marques-2195651b4/"
            target="_blank"
            rel="noreferrer"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/julianthemarques/"
            target="_blank"
            rel="noreferrer"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
        </div>
        <a className="button" href={curriculo} download>
          <PrimaryButton title={t("curriculumButton")} />
        </a>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .button {
    display: block;
    margin-top: 2rem;
  }
  .name-span {
    color: var(--primary-color);
  }
  .particles-home-page {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      gap: 1.2rem;
      .icon {
        cursor: pointer;
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        border-radius: 50%;
        transition: all 0.5 ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #7a007a;
          color: #7a007a;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #0961b8;
          color: #0961b8;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid #df003f;
          color: #df003f;
        }
      }
    }
  }
`;

export default withTranslation()(HomePage);
