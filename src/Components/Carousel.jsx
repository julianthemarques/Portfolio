import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import camping from "../img/camping.jpg";
import fishing from "../img/fishing.jpg";
import musicInstrument from "../img/musicInstrument.jpg";
import programming from "../img/programming.jpg";
import "../styles/carousel.css";

function ControlledCarousel() {
  return (
    <CarouselStyle>
      <Carousel className="carousel-component">
        <Carousel.Item>
          <img className="d-block w-100" src={programming} alt="Fisrt slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={musicInstrument}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fishing} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={camping} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </CarouselStyle>
  );
}

const CarouselStyle = styled.div`
  img {
    object-fit: cover;
    width: 420px;
    height: 420px;
    border-radius: 2%;
  }
`;
export default ControlledCarousel;
