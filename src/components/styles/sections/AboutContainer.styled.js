import styled from "styled-components";

export const AboutLeftContainer = styled.div`
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 70%;
    justify-content: center;
    padding: 25px;
    float: none;
  }
`;

export const AboutRightContainer = styled.div`
  width: 40%;
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
    height: 30%;
    justify-content: center;
    padding: 25px;
    float: none;
  }
`;
