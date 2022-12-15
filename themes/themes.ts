import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    commom: {
        black: '#202124',
    },
    grey: {
        '300': '#E1E1E6',
        '600': '#7C7C8A',
    },
    primary: {
      main: '#B2DAFF',
      light: '#00A6FB',
    },
    secondary: {
      main: '#FFCA88',
      light: '#FFA941',
    },
    tertiary: {
      main: '#CBF3F0',
      light: '#2EC4B6',
    },
  },
  typography: {
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
  },
})
