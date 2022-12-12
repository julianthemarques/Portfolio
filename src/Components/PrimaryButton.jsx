import React from "react";
import styled from "styled-components";

function PrimaryButton({ title, type }) {
  return (
    <PrimaryButtonStyled className type={type}>
      {title}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  margin-left: 3rem;
  padding: 0.8rem 2.5rem;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.6s ease-in-out;
  color: var(--white-color);
  background-color: transparent;
  border: none;

  &::after {
    content: "";
    opacity: 0;
    transition: all 0.6s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--primary-color);
    left: 0;
    bottom: 0;
  }
  &:hover {
    transform: scale(1.1);
    color: var(--white-color);
  }
`;

export default PrimaryButton;
