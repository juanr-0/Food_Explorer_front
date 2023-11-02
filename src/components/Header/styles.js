import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
  padding-top: 4rem;
  padding-bottom: 2.3rem;
  padding-right: 28px;
  padding-left: 28px;
  
  gap: 16px;
  
  width: 100%;
  display: flex;


  grid-area: top;
  
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  height: 8rem;

  > button {
        background-color: transparent;
        border: none;
    }

  > button svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;
  }

  justify-content: ${props => {
    if (props.isAdmin) {
      return 'none'; // Estilo para função de ADMIN
    } else if (props.isCustomer) {
      return 'space-between'; // Estilo para função de CUSTOMER
    } else {
      return 'none'; // Estilo padrão
    }
  }};

  > section {
    display: none;
  }

  .new_dish{
    display:none;
  }

  .sign-out{
    display: none;
  }
  

  .pedidos{
    display:none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: flex;
    padding: 24px;
    align-items: center;
    gap: 32px;

    button svg{
      display:none;
    }


    .receipt{
      display:none;
    }

    .new_dish {
      display:flex;

      > button {
        white-space:nowrap;
        justify-content: center;
      }
    }

    > img {
      display:flex;
    }

   
    
      
      > section {
        margin:0;
        display: flex;
        width: 100%;

        input {
          justify-content: center;
          align-items: center;
        }
      }
    

    .pedidos{
      display:flex;
    }

    .sign-out{
    display: flex;

    button{
      background: none;
      border:none;
    }
  }

  }
`;

export const Menu = styled.button`
  background:none;
  border: none;
  cursor: pointer;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 2rem;
    height: 2rem;
  }
`;

export const Logo_food_explorer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  align-self: center;
  margin-left:30px;

  > img {
    width: 2rem;
    height: 2rem;
  }

  h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Roboto;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
  }
  
  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    font-family: Roboto;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    margin-left: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin:0;

    align-items: flex-end;

    h1 {
      white-space: nowrap;

      font-family: Roboto;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    img {
      width: 30px;
      height: 30px;
    }


  }
`;

