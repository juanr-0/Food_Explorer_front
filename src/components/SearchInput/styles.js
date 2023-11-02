import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 8px;
  
  gap:12px;

  > input {
    height: 3.8rem;
    width: 100%;
    background: transparent;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    border: 0;
    
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
 
  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
  
`;