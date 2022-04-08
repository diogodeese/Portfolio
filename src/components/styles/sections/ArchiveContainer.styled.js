import styled from "styled-components";

export const ArchiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #icons {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.shilo};
    cursor: pointer;
    background-color: transparent;
    transition: transform ease 400ms;
  }

  #icons:hover {
    color: ${({ theme }) => theme.colors.valencia};
    transform: translate(0, -5px);
  }
`;

export const ArchiveIntroduction = styled.div`
  display: block;
  margin-top: 125px;
  margin-bottom: 100px;
  justify-content: center;
  margin-left: 15%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 10%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 7.5%;
  }
`;
