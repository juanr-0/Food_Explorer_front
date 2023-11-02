import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      display: flex;
      flex-direction: row;
      gap: 19rem;
    }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: 8px;
  
  padding: 4rem;


  min-width: 26.3rem;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  > h1 {
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    font-family: Poppins;
    font-size: 1.16rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }
  
  Button {
    display:flex;
    justify-content:center;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: Poppins;
    font-size: 1.16rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }

  Input {
    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
        display:flex;
        justify-content:center;

        font-family: Poppins;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }

    Input{
      width: 21.75rem;
      height: 3rem;
    }
    
  }
`;
