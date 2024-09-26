import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/close-up-kitten-by-window_23-2150782379.jpg?size=626&ext=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Cat</h3>
          <p>Adorable kitten by the window.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWJtRwuXyB6FDNp6JrYKSy-GwkEsHax6qdA&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Cat</h3>
          <p>Charming and playful.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Cat</h3>
          <p>Cute and fluffy European shorthair.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
