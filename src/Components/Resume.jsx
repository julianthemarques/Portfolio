import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ResumeItem from "../Components/ResumeItem";
import SmallTitle from "../Components/SmallTitle";
import Title from "../Components/Title";
import { InnerLayout } from "../styles/Layout";

function Resume() {
  const { t } = useTranslation();
  const school = <SchoolIcon />;
  const briefcase = <BusinessCenterIcon />;
  return (
    <ResumeStyled>
      <Title title={t("Resume")} span={t("Resume")} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={t("Working Experience")} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2020"}
            title={t("Intern - Full Stack Developer")}
            subTitle={"Instituto e Gestão de Tecnologia da Informática"}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={t("Educational Qualifications")} />
        </div>
        <div className="resume-content">
          <ResumeItem
            date={"2021 - present"}
            title={
              t("System Analysis and Development - Universidade Estácio de Sá")
            }
            subTitle={t("Currently Major Course")}
          />
          <ResumeItem
            date={"2019 - 2021"}
            title={
              t("Law School - Pontifícia Universidade Católica de Minas Gerais")
            }
            subTitle={t("Incompleted Law Course")}
          />
          <ResumeItem
            date={"2015 - 2017"}
            title={"Colégio baião santos"}
            subTitle={t("High School")}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
    div:last-child {
      .left-content {
        width: 22%;
      }
    }
  }
`;
export default Resume;
