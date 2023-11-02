import styled from 'styled-components';

export const Container = styled.section`
  margin: 1.75rem 0; /* 28px / 16px = 1.75rem */

  > h2 {
    border-bottom-width: 0.0625rem; /* 1px / 16px = 0.0625rem */
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1rem; /* 16px / 16px = 1rem */
    margin-bottom: 1.75rem; /* 28px / 16px = 1.75rem */

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.25rem; /* 20px / 16px = 1.25rem */
    font-weight: 400;
  }
`;
