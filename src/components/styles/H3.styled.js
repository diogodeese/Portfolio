import styled from "styled-components";

export const H3 = styled.h3`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.valencia};
  font-size: ${({ size }) => size || "18px"};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4vw;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;
