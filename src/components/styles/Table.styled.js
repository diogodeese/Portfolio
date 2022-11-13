import styled from "styled-components";

export const Table = styled.table`
  width: 70%;
  margin-bottom: 100;
  overflow: hidden;

  &,
  th {
    text-align: left;
    font-size: 20px;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
    padding-bottom: 10px;
    padding-inline: 5px;
    color: #d14949;
  }

  &,
  td {
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding-inline: 5px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 85%;
  }
`;
