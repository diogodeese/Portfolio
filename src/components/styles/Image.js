import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  height: auto;
  min-height: 225px;
  border: 2px solid ${({ theme }) => theme.colors.valencia};
  border-radius: 10px;
  object-fit: cover;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
  }
`;
