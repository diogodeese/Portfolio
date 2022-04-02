import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        background-color: #1f1f1f;
        overflow-x: hidden;
    }
    
    *::selection {
        color: white;
        background-color: #d14949;
    }
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #141414;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #ffd6d6;
        border-radius: 25px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #ffacac;
    }
`;

export default GlobalStyles;
