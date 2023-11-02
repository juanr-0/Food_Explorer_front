import { useState } from 'react';
import React from 'react';
import{CarouselContainer,Slide,BackButton,NextButton} from './styles.js';

export const Carousel = ({ children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  return (
    <CarouselContainer>
      <BackButton>
        <button onClick={prevSlide}>
          <img src="src\assets\arrowLeft.svg" alt="arrowLeft"/>
        </button>
      </BackButton>

      
      {React.Children.map(children, (child, index) => (
        <Slide key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {child}
        </Slide>
      ))}


      <NextButton>
        <button onClick={nextSlide}>
          <img src="src\assets\arrowRight.svg" alt="arrowRight"/>
        </button>
      </NextButton>
    </CarouselContainer>
  );
};

