import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="project-content">
              <div className="project-image">
                <img src={item.image} alt="" />
                <div className="pseudoDiv">
                  <div className="iconLink">
                    <a href={item.link1} target="_blank">
                      <GitHub />
                    </a>
                  </div>
                </div>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .project-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        padding: 0.3rem;
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      .pseudoDiv {
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        .iconLink {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .project-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .project-image:hover {
        .pseudoDiv {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          .iconLink {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.5s ease-in-out;
            }
          }

          .iconLink:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export default Menu;
