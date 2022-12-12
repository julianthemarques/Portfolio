import React from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  p {
    color: var(--white-color);
  }
  .progress-bar {
    display: flex;
    align-items: center;
    background-color: transparent;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.3rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default ProgressBar;
