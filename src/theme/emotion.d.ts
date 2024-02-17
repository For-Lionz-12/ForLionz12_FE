import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      [key: string]: string;
      yellow: string;
      pink: string;
      darkpink: string;
      skyblue: string;
      darkblue: string;
      lightgray: string;
      darkgray: string;
      white: string;
      black: string;
    };

    weight: {
      [key: string]: string;
      medium: string;
      regular: string;
      semibold: string;
      bold: string;
      ultrabold: string;
    };

    flexRow: (j?: JustifyType, a?: AlignType, gap?: number) => string;
    flexColumn: (j?: JustifyType, a?: AlignType, gap?: number) => string;
  }
}

type JustifyType =
  | "center"
  | "space-between"
  | "space-around"
  | "end"
  | "start"
  | "flex-end"
  | "flex-start"
  | "";
type AlignType = "center" | "end" | "start" | "";
