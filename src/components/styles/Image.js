import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  height: auto;
  border: 2px solid ${({ theme }) => theme.colors.valencia};
  border-radius: 10px;
`;
