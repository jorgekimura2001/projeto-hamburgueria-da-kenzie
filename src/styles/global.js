import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: 39, 174, 96;
        --color-primary-50: 147, 215, 175;
        --color-secundary: 235, 87, 87;
        --color-gray-100: 51, 51, 51;
        --color-gray-50: 130, 130, 130;
        --color-gray-20: 224, 224, 224;
        --color-gray-0: 245, 245, 245;
    }

    body, html{
        width: 100%;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: #fff;
    }
    body, div, ul, ol, main, header, button, input, p, figure, form, main {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    ul, ol{
        list-style-type: none;
    }
    button{
        cursor: pointer;
    }
`

export default GlobalStyle