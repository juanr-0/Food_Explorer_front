import styled from 'styled-components';

export const Container = styled.button`
  display:flex;
  align-items: center;
  gap:5px;
  
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  height: 3.8rem;
  border: 0;
  padding: 0 1rem;  
  border-radius: 8px;
  font-weight: 700;

  &:disabled {
    opacity: .5;
  }

  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  
`;