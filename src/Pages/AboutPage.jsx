import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import AboutSection from "../Components/AboutSection";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
import Title from "../Components/Title";

function AboutPage({ t }){
  return (
    <AboutStyled>
      <Title title={t("aboutme")} span={t("aboutme")} />
      <AboutSection />
      <Title title={t("skills")} span={t("skills")} />
      <Skills />
      <Resume />
    </AboutStyled>
  );
}

const AboutStyled = styled.section``;

export default withTranslation()(AboutPage);
