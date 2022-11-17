import styled from "styled-components";

export const H1 = styled.h1`
  justify-self: start;
  font-family: "Rubik", sans-serif;
  font-size: ${({ size }) => size || "46px"};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.sundown};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;
