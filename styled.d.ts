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
    borderRadius: {
      normal: number;
    };
    contextMenu: {
      arrowSize: number;
      arrowPadding: number;
      offset: [number, number];
      windowPadding: number;
    };
    floating: {
      tooltip: {
        offset: number;
      };
      floater: {
        arrow: {
          size: number;
        };
      };
    };
    zIndex: {
      contextMenu: number;
      overlay: number;
    };
    form: {
      input: {
        color: string;
        border: string;
        background: string;
        shadow: string;
      };
      select: {
        indicator: string;
      };
      asterisk: {
        color: string;
      };
      outline: {
        color: string;
      };
      checkbox: {
        checked: {
          border: string;
          background: string;
          color: string;
        };
      };
      requiredMessage: {
        color: string;
      };
      error: {
        color: string;
      };
    };
  }
}
