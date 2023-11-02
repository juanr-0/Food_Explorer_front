import styled from "styled-components";

export const Logo_food_explorer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.6rem;
  
  > img {
    width: 2.68rem;
    height: 2.68rem;
  }

  > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Roboto, sans-serif;
      font-size: 2.31rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
  }
`;