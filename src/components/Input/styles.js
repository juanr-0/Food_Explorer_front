import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  align-items: flex-start;
  border-radius: 8px;
  
  gap: 0.6rem;

  > input {
    height: 3.8rem;
    width: 100%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    border: 0;
    
    padding:10px;

    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      padding: 12px 14px;
    }
  }
 
  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  
  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size:1rem;
  }
  
`;