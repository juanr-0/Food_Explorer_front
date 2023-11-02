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
  display: flex;
  flex-direction: column;
  padding-top: 0.625rem; /* 10px / 16px = 0.625rem */
  padding-right: 2rem; /* 32px / 16px = 2rem */
  padding-left: 2rem; /* 32px / 16px = 2rem */
  padding-bottom: 4.0625rem; /* 65px / 16px = 4.0625rem */
  gap: 1.5rem; /* 24px / 16px = 1.5rem */
  margin-top: 1.25rem; /* 20px / 16px = 1.25rem */
  background: ${({ theme }) => theme.COLORS.DARK_400};
  
  > header {
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
  
    width: 6.375rem; /* 102px / 16px = 6.375rem */
  
    background: none;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
    font-family: Poppins;
    font-size: 1.3rem; /* 20px / 16px = 1.3rem */
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem; /* 140% / 16px = 1.4rem */
    
    > img{
      width: 1.125rem; /* 18px / 16px = 1.125rem */
      height: 1.125rem; /* 18px / 16px = 1.125rem */
    }
  }
  }
  
  > h1 {
  font-size: 2rem; /* 32px / 16px = 2rem */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 24px / 16px = 1.5rem */
  }
  
  img {
    width: 6.25rem; /* 100px / 16px = 6.25rem */
  }

  .first-row{
    display: flex;
    flex-direction: column;
    gap:24px;

    .dish_img{
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
  
      .send_img{
        display:flex;
        align-items: center;
        justify-content: center;
        
        align-self: stretch;
        padding: 8px 32px;
  
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
            width: 16px;
            height: 16px;
          }
  
          > p {
              color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
              font-family: Poppins;
              font-size: 12px;
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
          padding: 12px;
          font-size: 14px;
        }
      }
    }
  }
  
  .second-row{
    display: flex;
    flex-direction: column;
    gap:24px;

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
        
        li{

        }
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

  > footer{
     
    Button {
      display: flex;
      padding: 12px 32px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      align-self: stretch;

      border-radius: 5px;
      opacity: 0.8;
      background: ${({ theme }) => theme.COLORS.TOMATO_400};

    }

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin-top: 40px;
    .first-row{
      width: 100%;

      display: flex;
      flex-direction: row;
      gap:32px;

      input{
        width: 300px;
      }
    }

    .second-row{
      display: flex;
      flex-direction: row;
      gap:32px;

      input{
        width: 280px;
      }
    }
  }
`