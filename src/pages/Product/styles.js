import styled from "styled-components";
import { Link } from "react-router-dom";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  > button{
    display:flex;
    flex-direction: row;
    align-items:center;

    width:102px;
    
    margin-top:30px;
    margin-left: 10px;

    background: none;
    border:none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 

    > img{
      width:25px;
      height: 25px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    footer{
      bottom:0;
      position:absolute;
    }
  }
 
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 80px 40px 33px 40px;

  > img {
    width: 200px;
    height: 200px;
  }

  .details{
    align-items: center;
    
    .title{
      display:flex;
      justify-content: center;

      > p {
        margin-top:16px;
        white-space:nowrap;
    
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
      }

    }
  
    > p {
      margin-top:24px;
  
         color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
  
    > li {

      justify-content: center;

      margin-top:24px;
      display: flex;
      align-items: center;  
      flex-wrap: wrap;
      gap: 24px;
    }
  
    > button{
      margin-top:48px;
      
      border-radius: 5px;
  
      display: flex;
      padding: 12px 24px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;
      
    }
  
    .info{

      justify-content: center;
      display: flex;
      gap: 16px;
      align-items: center;
      margin-top:48px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: flex;
    flex-direction:row;
    gap:47px;

    .details{
      
      h1 {
        justify-content:center;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }

      > li {
        margin-top:24px;
        display: flex;
        flex-direction: row;
        align-items: center;  
        flex-wrap: wrap;
        gap: 12px;
      } 

      button{
        margin-top:48px;
        
        border-radius: 5px;
    
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        gap: 8px;
        flex: 1 0 0;
      }

      .info{
        order{
          display: flex;
          align-items: center;
        }
      }
    }
  }
`
export const Quantity = styled.div`
    display: flex;
    width: 100px;
    padding: 4px 0px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    font-family: Roboto;
    font-size: 22.626px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 27.152px;
      height: 27.152px;
    }
`;
