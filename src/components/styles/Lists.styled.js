import styled from "styled-components";

export const Ul = styled.ul`
  margin-bottom: 5px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Li = styled.li`
  margin-bottom: 5px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 100px;
  width: 100px;
`;
