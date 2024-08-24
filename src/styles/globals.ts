import { createGlobalStyle } from "styled-components";
import { Breakpoints, Colors, Fonts } from "./constants";

// https://www.joshwcomeau.com/css/custom-css-reset/
const CSSReset = createGlobalStyle`
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html, body, #__next {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`;

const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    font-family: ${Fonts.Piazzolla};
    color: ${Colors.RavensPurple};
    background-color: ${Colors.SaintsGold}
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    line-height: 1.25;
    letter-spacing: 0.05em;
  }

  h1 {
    font-weight: 900;
    padding-bottom: 28px;

    @media (min-width: ${Breakpoints.Laptop}) {
      font-size: 48px;
      padding-bottom: 32px;
    }
  }

  h2 {
    font-weight: 700;
    padding-top: 8px;
    padding-bottom: 20px;
    
    @media (min-width: ${Breakpoints.Laptop}) {
      font-size: 28px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
  }
  
  p {
    padding-bottom: 20px;
    text-wrap: pretty;

    @media (min-width: ${Breakpoints.Laptop}) {
      font-size: 20px;
      padding-bottom: 24px;
    }
  }

  a {
    color: inherit;
    
    :hover {
      color: ${Colors.DolphinsTeal};
      text-decoration: none;
    }
  }

  ol {
    @media (min-width: ${Breakpoints.Laptop}) {
      font-size: 20px;
      padding-bottom: 24px;
    }
  }
`;

export { CSSReset, GlobalStyles };
