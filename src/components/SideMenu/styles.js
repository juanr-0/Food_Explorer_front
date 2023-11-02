import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  grid-area: none;
  position: absolute;
  z-index: +2;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`;

export const HeaderSideMenu = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.125rem 20.0625rem 1.25rem 1.5rem; /* 50px 321px 20px 24px */

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem; /* 7px / 16px = 0.4375rem */

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Roboto;
    font-size: 1rem; /* 16px / 16px = 1rem */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 1.125rem; /* 18px / 16px = 1.125rem */
    height: 1.125rem; /* 18px / 16px = 1.125rem */
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.25rem 1.75rem 0.8125rem 1.75rem; /* 36px 28px 13px 28px */

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: flex-start;
    gap: 0.625rem; /* 10px / 16px = 0.625rem */
    padding: 0.625rem;

    font-family: Poppins;
    font-size: 1rem; /* 16px / 16px = 1rem */
    font-style: normal;
    font-weight: 300;
    line-height: 140%;

    border-bottom: 0.0625rem solid ${({ theme }) => theme.COLORS.DARK_1000}; /* 1px / 16px = 0.0625rem */

    &[data-menu-active="true"] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
  
`;

export const FooterSideMenu = styled.footer`
  padding: 1.5rem; /* 24px / 16px = 1.5rem */
  display: flex;
  align-items: center;
  gap: 0.4375rem; /* 7px / 16px = 0.4375rem */

  > img {
    width: 2.5rem; /* 40px / 16px = 2.5rem */
    height: 2.5rem; /* 40px / 16px = 2.5rem */
    border-radius: 1.375rem; /* 22px / 16px = 1.375rem */
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > div strong {
    font-size: 0.875rem; /* 14px / 16px = 0.875rem */
  }
  > div small {
    font-size: 0.75rem; /* 12px / 16px = 0.75rem */
  }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 1.25rem; /* 20px / 16px = 1.25rem */
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
