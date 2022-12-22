import { createTheme, ThemeOptions } from '@mui/material/styles';
import { ExtendedTypographyOptions } from 'theme';

export const theme = createTheme({
  palette: {
    commom: {
        black: '#202124',
        white: '#FFFFFF',
    },
    grey: {
        '300': '#E1E1E6',
        '600': '#7C7C8A',
    },
    primary: {
      light: '#B2DAFF',
      main: '#00A6FB',
    },
    secondary: {
      light: '#FFCA88',
      main: '#FFA941',
    },
    tertiary: {
      light: '#CBF3F0',
      main: '#2EC4B6',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      fontSize: '14px',
      textTransform: 'none',
    },
    phoneTextSmall: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '12px',
    },
    phoneTextMedium: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '14px',
    },
    phoneTextLarge: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '16px',
    },
    phoneHeadingSmall: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '18px',
    },
    phoneHeadingMedium: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '22px',
    },
    phoneHeadingLarge: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '30px',
    },
    desktopTextSmall: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '14px',
    },
    desktopTextMedium: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '16px',
    },
    desktopTextLarge: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '18px',
    },
    desktopHeadingSmall: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '20px',
    },
    desktopHeadingMedium: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '24px',
    },
    desktopHeadingLarge: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '32px',
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions)
