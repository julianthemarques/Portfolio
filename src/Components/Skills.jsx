import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";

function Skills() {
  return (
    <SkillsStyled>
      <InnerLayout>
        <div className="subtitle">
          <h3>
            {t("This is how much I'm used to these")} <span>{t("tools")}</span>{" "}
          </h3>
        </div>
        <div className="skills">
          {/* <ProgressBar title={"HTML"} width={"95%"} text={"95%"} />
          <ProgressBar title={"CSS"} width={"94%"} text={"94%"} />
          <ProgressBar title={"Javascript"} width={"92%"} text={"92%"} />
          <ProgressBar title={"React JS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Next JS"} width={"77%"} text={"77%"} />
          <ProgressBar title={"Typescript"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Python"} width={"58%"} text={"58%"} />
          <ProgressBar title={"Django"} width={"15%"} text={"15%"} />
          <ProgressBar title={"Postgres"} width={"62%"} text={"62%"} />
          <ProgressBar title={"MySQL"} width={"51%"} text={"51%"} /> */}
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/NextJS-000?style=for-the-badge&logo=Next.js&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/TypeScript-0081CB?style=for-the-badge&logo=typescript&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/figma-0AC97F?style=for-the-badge&logo=figma&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/%F0%9F%92%85%20Styled_Components&Icons-pink?style=for-the-badge"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
          />
          <img
            alt="Skills Badge"
            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .subtitle {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 3rem;
    color: var(--white-color);
    span {
      font-size: 3rem;
      color: var(--primary-color);
    }
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
