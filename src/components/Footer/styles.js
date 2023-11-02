import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  padding:2rem;
  
  width: 100%;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center; 

  gap:1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};


  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
   
    text-align: right;
    font-family: DM Sans;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }
`;

export const Logo_food_explorer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  > img {
    width: 1.3rem;
    height: 1.3rem;
  }

  > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};

      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      white-space: nowrap;
  }
`;