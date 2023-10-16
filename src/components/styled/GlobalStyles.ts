import { createGlobalStyle } from "styled-components";
import media, { setBreakPoints } from "css-in-js-media";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    setBreakPoints(theme.breakpoints);
    return "";
  }}
  html,
  body {
    -webkit-overflow-scrolling: touch;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.familyRegular};
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.01em;

    ${media(">=tablet")} {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background-color: currentColor;
    margin: 0;
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: none;
    }
  }

  button {
    border: 0;
    appearance: none;
    background: none;
    cursor: pointer;
    color: inherit;
    padding: 0;
    font-size: inherit;
  }

  // Remove 300ms delay on buttons:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation
  a,
  button,
  input[type='button'],
  input[type='submit'] {
    touch-action: manipulation;
  }

  button,
  input,
  select,
  textarea,
  a {
    outline-offset: 4px;

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  // Remove animations and transitions on devices that are low on resources or battery
  // From: https://hankchizljaw.com/wrote/a-modern-css-reset/
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // Prevent overflow of images and remove spacing at the bottom
  picture,
  img,
  svg,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  svg {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
