import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profilePic from "../assets/img/profilePic.webp";

function Nav() {
  const { t } = useTranslation();
  return (
    <NavStyled>
      <div className="profilePic">
        <img src={profilePic} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            {t("Home")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            {t("About")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            {t("Projects")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            {t("Contact")}
          </NavLink>
        </li>
      </ul>
      <footer>
        <p>
          @2022 <b>My website</b>
        </p>
      </footer>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .profilePic {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active {
      background-color: var(--primary-color-light);
      color: var(--white-color);
    }
    li {
      display: block;
      a {
        text-decoration: none;
        display: block;
        padding: 0.5rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.7s ease-in-out;
        font-weight: 500;
        letter-spacing: 1px;
        :hover {
          cursor: pointer;
          color: var(--white-color);
        }
        ::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color-light);
          transition: all 0.3s cubic-bezier(0.43, 0.57, 0.95, 0.51);
          opacity: 1;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: var(--primary-color-light);
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
    b {
      font-size: 0.7rem;
    }
  }
`;
export default Nav;
