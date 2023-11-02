import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  
`;

export const Panorama = styled.div`
  height: 7.5rem;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
  
  border-radius: 3px;
  
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  
  > img {
    width: 14rem;
    height: 12rem;
    
    padding-bottom: 2.5rem;
  }

  .text-panorama {
    
    > h1 {
      white-space: nowrap;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-family: Poppins;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }

    > p {
      
      width: 14rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-family: Poppins;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }


  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    height: 16.25rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    

    > img {
      width: 25rem;
      height: 25rem;
      padding-bottom: 4.7rem;
    }
    
    .text-panorama {
      padding-right: 3.125rem;

      > h1 {      
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: Poppins;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
      }

      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }
`;

export const FoodSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`
export const FoodWrapUp = styled.div`
 display: flex;
 flex-direction: column;
 margin-top:32px;
  width: 100%;
 gap: 24px;
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  
  padding-left: 1rem; /* 16px / 16px = 1rem */
  padding-right: 1rem; /* 16px / 16px = 1rem */
  padding-top: 2.75rem; /* 44px / 16px = 2.75rem */
  padding-bottom: 1.5rem; /* 24px / 16px = 1.5rem */

  align-items: center;

  scrollbar-width: none; 
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    padding-left: 3.125rem; /* 50px / 16px = 3.125rem */
    padding-right: 3.125rem; /* 50px / 16px = 3.125rem */
    padding-top: 5rem; /* 80px / 16px = 5rem */
  }
`;
