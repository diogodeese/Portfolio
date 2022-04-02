import styled from "styled-components";

export const A = styled.a`
  text-align: center;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ theme }) => theme.colors.valencia};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;
