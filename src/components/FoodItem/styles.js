import styled from 'styled-components';

export const Container = styled.div`
  border: 0;
`;

export const FoodItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem; /* 250px / 16px = 15.625rem */
  height: 21.875rem; /* 350px / 16px = 21.875rem */
  gap: 0.75rem; /* 12px / 16px = 0.75rem */
  padding: 1.5rem; /* 24px / 16px = 1.5rem */

  background: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: 0.5rem; /* 8px / 16px = 0.5rem */
  justify-content: center;

  .add_button {
    padding-top: 1rem; /* 16px / 16px = 1rem */

    Button {
      display: flex;
      height: 2rem; /* 32px / 16px = 2rem */
      padding: 1.5rem 3rem; /* 12px 24px / 16px = 1.5rem 3rem */
      justify-content: center;
      align-items: center;
      gap: 0.5rem; /* 8px / 16px = 0.5rem */

      border-radius: 0.3125rem; /* 5px / 16px = 0.3125rem */
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }
`;

export const FoodImage = styled.img`
  width: 5.5rem; /* 88px / 16px = 5.5rem */
  height: 5.5rem; /* 88px / 16px = 5.5rem */
`;

export const FoodName = styled.p`
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    font-family: Poppins;
    font-size: 0.875rem; /* 14px / 16px = 0.875rem */
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 24px / 16px = 1.5rem */
    
    white-space: nowrap;
  }
`;

export const FoodPrice = styled.p`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  
  text-align: center;
  
  font-family: Roboto;
  font-size: 1rem; /* 16px / 16px = 1rem */
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const Quantity = styled.div`
  display: flex;
  width: 6.25rem; /* 100px / 16px = 6.25rem */
  height: 2rem; /* 32px / 16px = 2rem */
  padding: 0.25rem 0; /* 4px 0px / 16px = 0.25rem 0 */
  justify-content: center;
  align-items: center;
  gap: 0.875rem; /* 14px / 16px = 0.875rem */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const EditItem = styled.button`
  display: flex;
  justify-content: flex-end;
  
  background: none;
  border: none;
  
  > a svg {
    background: none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    width: 3rem;
    height: 3rem; 
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 0.75rem; /* 12px / 16px = 0.75rem */
`;

export const FoodDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  text-align: center;
  font-family: Poppins;
  font-size: 0.75rem; /* 12px / 16px = 0.75rem */
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 24px / 16px = 1.5rem */
  
  display: none;
`;
