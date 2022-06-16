import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      body: string;
    };
    fonts: {
      familyRegular: string;
      familyHeadings: string;
    };
    breakpoints: {
      xsUp: string;
      smUp: string;
      mdUp: string;
      lgUp: string;
    };
    container: {
      maxWidth: number;
      gap: number;
    };
    timings: {
      fast: number;
      normal: number;
      slow: number;
    };
  }
}
