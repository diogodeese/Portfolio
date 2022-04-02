import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 50px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  padding: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const Project = styled.div`
  height: 285px;
  width: 285px;
  margin: 5px;
  padding: 25px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.nightRider};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 3px 6px;

  h2 {
    text-align: left;
    font-size: 20px;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.shilo};
  }

  h4 {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 14px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.veryLightGrey};
    background-color: transparent;
  }

  #main-icon {
    float: left;
    text-align: left;
    font-size: 34px;
    color: ${({ theme }) => theme.colors.valencia};
    background-color: transparent;
  }

  #icons {
    margin-top: 10px;
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

export const ProjectFooter = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 15px;
  left: 0;
  padding-inline: 20px;
  background-color: transparent;

  ul,
  li {
    display: inline-block;
    background-color: transparent;
  }

  li {
    padding: 5px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ProjectLinks = styled.ul`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  width: 84%;
  height: 40px;
  margin-bottom: 15px;
  background-color: transparent;

  li {
    height: 40px;
    margin-inline: 5px;
    background-color: transparent;
  }
`;
