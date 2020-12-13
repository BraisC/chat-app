import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent; /* Avoid blue square on tapping */
    }
    html {
      font-size: 62.5%; 
      box-sizing: border-box;
      --color-red: #ff5959;
      --color-primary: ${(props) => props.theme.primary};
      --color-secondary: ${(props) => props.theme.secondary};
      --color-transparency: ${(props) => props.theme.transparency};
      --color-white: ${(props) => props.theme.white};
      --color-text: ${(props) => props.theme.text};
      --color-transparency-show: ${(props) => props.theme.transparencyShow};
      --shadow: 6px 6px 13px rgba(0, 0, 0, 0.35);
      @media ${(props) => props.theme.mediaQueries.tabLand} {
          font-size: 56.25%;
      }
      @media ${(props) => props.theme.mediaQueries.tab} {
          font-size: 50%;
      }
    
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      line-height: 1.6;
    }

    textarea:focus, input:focus{
      outline: 1px solid var(--color-red);
    }
`;
