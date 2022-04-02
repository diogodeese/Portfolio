import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #d9c5c5;
  font-size: 20px;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.valencia};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.valencia};
    border-radius: 4px;
    transition: all 0.4s ease-out;
    cursor: pointer;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const AButton = styled.a`
  padding: 0.5rem 1rem;
  color: #d9c5c5;
  font-size: 20px;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.valencia};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.valencia};
    border-radius: 4px;
    transition: all 0.4s ease-out;
    cursor: pointer;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;
