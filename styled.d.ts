import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    allowBlur: boolean;
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
      smallPhone: number;
      phone: number;
      tablet: number;
      desktop: number;
      largeDesktop: number;
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
    floating: {
      tooltip: {
        offset: number;
      };
      popover: {
        offset: number;
      };
      dropdown: {
        offset: number;
      };
      floater: {
        flip: number;
        shift: number;
        arrow: {
          size: number;
          padding: number;
        };
      };
    };
    zIndex: {
      contextMenu: number;
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

    fileProgress: {
      progressBackground: string;
      states: Record<API_REQUEST_STATUS, { main: string; accent: string }>;
    };
  }
}
