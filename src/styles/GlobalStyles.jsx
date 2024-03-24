import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #EEF0E5;
    --light-green: #99BC85;
    --font-color: #163020;
    --game-board-color: #EEEEEE;
    --play-box: #D4E7C5;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    box-sizing: border-box;
  }
  
  body {
    /* min-height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: var(--background-color);
    color: var(--font-color);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    background-color: none;
    border: none;
    cursor: pointer;
  }

  input {
    outline: none;
  }

  p {
    margin: 0;
  }

  img {
    margin: 0;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyles