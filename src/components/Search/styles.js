import styled from "styled-components";

export const Container = styled.section`
    margin-bottom:2.25rem;

  > input {

    height: 3.8rem;
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    
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
`;
