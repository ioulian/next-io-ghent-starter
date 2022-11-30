import { createGlobalStyle } from "styled-components";

import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.familyRegular};
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${theme.colors.body};
    letter-spacing: 0.01em;

    @media (${theme.breakpoints.smUp}) {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
  }

  a {
    color: ${theme.colors.primary};

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
  }

  // Remove 300ms delay on buttons:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation
  a,
  button,
  input[type='button'],
  input[type='submit'] {
    touch-action: manipulation;
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

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.fonts.familyHeadings};
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    letter-spacing: 0.04em;

    @media (${theme.breakpoints.smUp}) {
      font-size: 2.125rem;
      line-height: 2.625rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.04em;

    @media (${theme.breakpoints.smUp}) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    @media (${theme.breakpoints.smUp}) {
      font-size: 1.375rem;
      line-height: 1.625rem;
    }
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    letter-spacing: 0.02em;
    font-weight: 600;

    @media (${theme.breakpoints.smUp}) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  h5 {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.02em;
    font-weight: 600;
  }

  .visually-hidden {
    position: absolute!important;
    width: 1px!important;
    height: 1px!important;
    padding: 0!important;
    margin: -1px!important;
    overflow: hidden!important;
    clip: rect(0,0,0,0)!important;
    white-space: nowrap!important;
    border: 0!important;
  }
`;
