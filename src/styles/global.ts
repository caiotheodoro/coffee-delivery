import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
        width: 10px;
        }

        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme['base-hover']};
        }

        ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme['base-label']};
        }
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }
    body {
        background: ${({ theme }) => theme['background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input,textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    a {
        text-decoration: none;
    }

  

    `
