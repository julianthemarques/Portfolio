import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ProgressBar from "./ProgressBar";

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
          <ProgressBar title={"HTML"} width={"95%"} text={"95%"} />
          <ProgressBar title={"CSS"} width={"94%"} text={"94%"} />
          <ProgressBar title={"Javascript"} width={"92%"} text={"92%"} />
          <ProgressBar title={"React JS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Next JS"} width={"77%"} text={"77%"} />
          <ProgressBar title={"Typescript"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Python"} width={"58%"} text={"58%"} />
          <ProgressBar title={"Django"} width={"15%"} text={"15%"} />
          <ProgressBar title={"Postgres"} width={"62%"} text={"62%"} />
          <ProgressBar title={"MySQL"} width={"51%"} text={"51%"} />
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
