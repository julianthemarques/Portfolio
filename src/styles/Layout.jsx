import styled from "styled-components";

export const InnerLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 642px) {
    padding: 4rem;
  }
  @media screen and (max-width: 510px) {
    width:100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    padding: 1rem; 
  }
`;
