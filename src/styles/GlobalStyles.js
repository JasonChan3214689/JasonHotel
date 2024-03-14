import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }


    :root {



    --color-gold-100: #eacf94;
    --color-gold-300: #c2aa77;
    --color-gold-600: #756747;
    --color-black-100: #949494;
    --color-black-300: #4e4e4e;
    --color-black-600: #242424;
    --color-white-100: #ffffff;
    --color-white-300: #e8e8e8;
    --color-white-600: #e2e2e2;

    body {
    font-family: "Noto Serif TC", serif;
    overflow-x: hidden;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    
    }

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 2px 5px 15px 0 rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

     button {
     cursor: pointer;
        
    }

    input,
    button,
    textarea,
    select {
        
        color: inherit;
    }



    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
        }
    }

    

`;

export default GlobalStyles;
