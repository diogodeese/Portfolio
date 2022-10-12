import styled from "styled-components";

export const Ul = styled.ul`
  margin-bottom: 5px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;

export const Li = styled.li`
  position: relative;
  margin-bottom: 5px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 20px;
  margin-right: 100px;
  width: fit-content;

  &:before {
    content: '▹';
    position: absolute;
    left: -20px;
    color: ${({ theme }) => theme.colors.valencia};
    font-size: 12px;
    line-height: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
