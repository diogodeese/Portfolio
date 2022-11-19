import styled from "styled-components";

export const Ul = styled.ul`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Li = styled.li`
  margin-bottom: 5px;
  font-family: "Rubik", "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 100px;
  width: fit-content;

  &::before {
    content: "▹";
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.valencia};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
