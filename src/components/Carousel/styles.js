import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  display: flex;  
  margin-top: 1.25rem; /* 20px / 16px = 1.25rem */
`;

export const Slide = styled(Link)`
  transition: transform 0.5s ease-in-out;
  
  display: flex;
  flex-direction: row;
  gap: 1.6875rem; /* 27px / 16px = 1.6875rem */
  padding: 1.5rem; /* 24px / 16px = 1.5rem */
`;

export const BackButton =  styled.button`
  grid-area: "back";
  z-index: +1;

  background: none;
  border: none;

  > button {
    background: none;
    border: none;
    
    > img {
      width: 2.5rem; /* 40px / 16px = 2.5rem */
      height: 2.5rem; /* 40px / 16px = 2.5rem */
    }
  }
`;

export const NextButton =  styled.button`
  grid-area: "next";
  z-index: +1;
  
  background: none;
  border: none;

  > button {
    background: none;
    border: none;
    
    img{
      width: 5rem; /* 80px / 16px = 5rem */
      height: 5rem; /* 80px / 16px = 5rem */
    }
  }
`
