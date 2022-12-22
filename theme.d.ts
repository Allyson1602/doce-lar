import { Theme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

interface ITypographyOptions {
    fontFamily: string,
    fontWeight: string,
    fontSize: string,
}
interface IColorOptions {
    main: string;
    light: string;
}

export interface CustomTheme extends Theme {
    palette: {
      commom: {
        black: string;
        white: string;
      },
      grey: {
        '300': string;
        '600': string;
      },
      primary: IColorOptions,
      secondary: IColorOptions,
      tertiary: IColorOptions,
    },
    typography: ExtendedTypographyOptions,
}

declare module '@mui/material/styles' {
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    phoneTextSmall: true,
    phoneTextMedium: true,
    phoneTextLarge: true,
    phoneHeadingSmall: true,
    phoneHeadingMedium: true,
    phoneHeadingLarge: true,
    desktopTextSmall: true,
    desktopTextMedium: true,
    desktopTextLarge: true,
    desktopHeadingSmall: true,
    desktopHeadingMedium: true,
    desktopHeadingLarge: true,
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  fontWeightLight: number,
  fontWeightRegular: number,
  fontWeightMedium: number,
  fontWeightBold: number,
  phoneTextSmall: ITypographyOptions,
  phoneTextMedium: ITypographyOptions,
  phoneTextLarge: ITypographyOptions,
  phoneHeadingSmall: ITypographyOptions,
  phoneHeadingMedium: ITypographyOptions,
  phoneHeadingLarge: ITypographyOptions,
  desktopTextSmall: ITypographyOptions,
  desktopTextMedium: ITypographyOptions,
  desktopTextLarge: ITypographyOptions,
  desktopHeadingSmall: ITypographyOptions,
  desktopHeadingMedium: ITypographyOptions,
  desktopHeadingLarge: ITypographyOptions,
}
