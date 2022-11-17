import styled from "styled-components";

export const AboutLeftContainer = styled.div`
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-inline: 3%;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-inline: 2%;
    width: 50%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 60%;
    justify-content: center;
    padding: 50px;
    float: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 25px;
  }
`;

export const AboutRightContainer = styled.div`
  width: 30%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 40%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 40%;
    justify-content: center;
    padding: 25px;
    float: none;
  }
`;
