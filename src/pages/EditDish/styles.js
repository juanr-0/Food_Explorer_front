import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.COLORS.DARK_400};
  overflow-y: scroll;
  
  `

export const Form = styled.form`
  margin-top: 20px;
  
  display: flex;
  flex-direction: column;
  padding-top:10px;
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom:65px;
  
  gap:24px;
  
  
  background: ${({ theme }) => theme.COLORS.DARK_400};
  
  > header {
      button {
        display:flex;
        flex-direction: row;
        align-items:center;
      
        width:102px;
        
      
        background: none;
        border:none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      
        font-family: Poppins;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        
        > img{
          width: 1.8rem;
          height: 1.8rem;
        }
      }
  }
  
  > h1{
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }

  img {
        width: 8.3rem;
      }

  .first-row{
    display: flex;
    flex-direction: column;
    gap:2rem;

    .dish_img{
      display:flex;
      flex-direction: column;
      gap:1.3rem;
  
      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      

      .send_img{
        display:flex;
        align-items: center;
        justify-content: center;
        
        align-self: stretch;
        padding: 8px 2.6rem;
  
        background: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 8px;
        
        input{
          display:none;
        }

        > button {
          display:flex;
          flex-direction:row;
          align-items: center;
          border:none;
  
          gap: 8px;
  
  
          width: 100%;
          background: transparent;
  
          > img {
            width: 1.3rem;
            height: 1.3rem;
          }
  
          > p {
              color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
              font-family: Poppins;
              font-size: 1rem;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
          }
        }
      }
    }
  
    .name {
      display:flex;
      flex-direction: column;
  
      gap: 16px;
  
      > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      
      > input{
        
        display: flex;
        padding: 12px 14px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        
        background: ${({ theme }) => theme.COLORS.DARK_800};
  
        border: none;
      
        border-radius: 8px;
        &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        }
      }
  
  
    }
  
    .category {
      display:flex;
      flex-direction: column;
      gap:16px;
  
      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
  
      .drop_down_category{
        display:flex;
        align-items: center;
        justify-content: space-between;
  
        padding: 8px 16px;
  
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 8px;
  
        select {

          width: 100%;
          background:none;
          border-color:${({ theme }) => theme.COLORS.DARK_900};

          border-radius: 0.5rem;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};

          height:4rem;
          padding: 1rem;
          font-size: 1.16rem;
        }
      }
    }
  }
  
  .second-row{
    display: flex;
    flex-direction: column;
    gap:2rem;

    .ingredients {
      display: flex;
      flex-direction: column;
      gap: 16px;
      
      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
  
      .ingredients_list {
  
        display: flex;
  
        padding: 4px 8px;
        gap: 1rem;
        
        align-items: center;
        border-radius: 8px;
        flex-shrink: 0;
        
        flex-wrap: wrap;
  
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
  
      }
  
    }
  
    .price {
      display:flex;
      flex-direction: column;
  
      gap: 16px;
  
      > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      
      > input{
        
        display: flex;
        padding: 12px 14px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        
        background: ${({ theme }) => theme.COLORS.DARK_800};
  
        border: none;
      
        border-radius: 8px;
        &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        }
      }
  
  
    }
  }
  
  .description {
    display:flex;
    flex-direction: column;

    gap: 16px;

    > p{
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
    
    > textarea{
      
      display: flex;
      padding: 12px 14px;
      justify-content: center;
      align-items: center;

      height: 172px;

      gap: 14px;
      
      background: ${({ theme }) => theme.COLORS.DARK_800};

      border: none;
    
      border-radius: 8px;
      &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      }
    }


  }


  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin-top: 2.5rem;
    .first-row{
      width: 100%;

      display: flex;
      flex-direction: row;
      gap:2rem;

      input{
        width: 18.75rem;
      }
    }

    .second-row{
      display: flex;
      flex-direction: row;
      gap:2rem;

      input{
        width: 17.5rem;
      }
    }
  }

  > footer {
    display: flex;
    justify-content:space-between;
    gap: 2rem;
    
    Button {
      display: flex;
      padding: 12px 32px;
      
      justify-content: center;
      align-items: center;

      gap: 8px;
      
      align-self: stretch;

      border-radius: 5px;
      opacity: 0.8;

      background: ${({ theme }) => theme.COLORS.DARK_800};

    }
    
    Button:nth-child(2){
      display: flex;
      padding: 12px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      
      align-self: stretch;

      border-radius: 5px;
      opacity: 0.8;

      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`