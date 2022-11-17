import styled from "styled-components";

export const HeroContainer = styled.div`
  display: block;
  margin-right: 15%;
  overflow: hidden;
  min-height: 450px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 75px;
    margin-bottom: 0px;
    margin-left: 25px;
  }
`;
