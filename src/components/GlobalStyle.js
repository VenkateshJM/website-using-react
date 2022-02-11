import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem;
    color: #cccccc;
}

span{
    font-weight: bold;
    color: #23d977;
}

a{
    font-size: 1.1rem;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d977;
    color: white;
    background: transparent;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d977;
        color: white;
    }
}
`;

export default GlobalStyle;
