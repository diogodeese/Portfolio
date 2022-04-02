import styled from "styled-components";

export const H1 = styled.h1`
  justify-self: start;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  font-size: ${({ size }) => size || "46px"};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sundown};
  cursor: default;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6.5vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 22px;
  }
`;
