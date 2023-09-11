import { IconButton } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import i18n from "./utils/i18n";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checkedTheme, setCheckedTheme] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [checkedLanguage, setCheckedLanguage] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setCheckedTheme(false);
    } else {
      setTheme("light-theme");
      setCheckedTheme(true);
    }
  };

  const changeLanguage = () => {
    i18n.changeLanguage(checkedLanguage ? "en" : "pt");
    setCheckedLanguage(!checkedLanguage);
  };

  console.log(navToggle);

  return (
    <div className="App">
      {navToggle && (
        <CloseSideBarStyle
          onClick={() => {
            setNavToggle(false);
          }}
        />
      )}
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checkedTheme}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
              color="default"
            />
          </div>
        </div>

        <div className="language-switch">
          <div className="left-content">
            <LanguageIcon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checkedLanguage}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={changeLanguage}
              color="default"
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage particlesColor={checkedTheme ? "#375683" : "#EDDF1C"} />
            }
          />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/projects" exact element={<ProjectsPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const CloseSideBarStyle = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 19;
  }
`;

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
  }
`;

export default App;
