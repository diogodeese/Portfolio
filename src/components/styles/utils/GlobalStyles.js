import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300&family=Raleway:wght@200&family=Work+Sans&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        background-color: ${({ theme }) => theme.colors.nero};
        overflow-x: hidden;
    }
    
    *::selection {
        color: white;
        background-color: ${({ theme }) => theme.colors.valencia};
    }
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.black};
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.cosmos};
        border-radius: 25px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.colors.sundown};
    }
`;

export default GlobalStyles;
