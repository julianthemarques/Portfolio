import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyle className={`${navToggle ? "nav-toggle" : ""}`}>
      <Nav />
    </SidebarStyle>
  );
}

const SidebarStyle = styled.div`
  position: fixed;
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  z-index: 1;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  } ;
`;

export default Sidebar;
