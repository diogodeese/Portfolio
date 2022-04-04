import styled from "styled-components";

export const MainContainer = styled.div`
  display: ${({ display }) => display || "flex"};
  align-items: center;
  justify-content: center;
  margin-inline: 100px;
  height: ${({ height }) => height || "fit-content"};
  min-height: fit-content;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-inline: 0;
    ${({ mediaDisplay }) => `display: ${mediaDisplay};`}
  }
`;
