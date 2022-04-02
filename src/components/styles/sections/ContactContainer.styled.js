import styled from "styled-components";

export const ContactContainer = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 300px;
  margin-bottom: 200px;
  text-align: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 25px;
  }
`;
