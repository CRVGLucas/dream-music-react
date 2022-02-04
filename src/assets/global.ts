import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark: #1A1A1A;
        --dark-red: #520000;
        --red: #DC4040;
        --text-color: #F6F6F6;
        --text-gray: #CFC5C5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

`

