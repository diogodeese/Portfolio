import styled from "styled-components";

export const H2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  ${({ width }) => `max-width: ${width};`}
  color: #d9c5c5;
  font-size: ${({ size }) => size};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;
