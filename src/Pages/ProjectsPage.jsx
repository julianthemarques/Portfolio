import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import Button from "../Components/Button";
import Menu from "../Components/Menu";
import Title from "../Components/Title";
import projects from "../data/Projects";
import { InnerLayout } from "../styles/Layout";

const allButtons = ["All", ...new Set(projects.map((item) => item.category))];

function ProjectsPage({ t }) {
  const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <>
      <Title title={t("projects")} span={t("projects")} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </>
  );
}

export default withTranslation()(ProjectsPage);
