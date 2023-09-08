import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont, adress }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont}</p>
        <p>{adress}</p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  border-radius: 1px;
  @media screen and (max-width: 502px) {
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 1rem 0;
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
    white-space: break-spaces;
  }
  .left-content {
    @media screen and (max-width: 502px) {
      margin-bottom: 1rem;
    }

    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.1rem 0;
      @media screen and (max-width: 502px) {
        font-size: 0.7rem;
      }
    }
  }
`;

export default ContactItem;
