import styled from "styled-components";

export const H3 = styled.h3`
  margin-bottom: 20px;
  letter-spacing: 3px;
  color: #d14949;
  font-size: 18px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4vw;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;
