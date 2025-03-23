import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'NeueHaasDisplay', sans-serif`,
  body: `'NeueHaasDisplay', sans-serif`,
};

const styles = {
  global: {
    '@font-face': [
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayBlack.ttf') format('truetype')`,
        fontWeight: 900,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayBold.ttf') format('truetype')`,
        fontWeight: 700,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayMedium.ttf') format('truetype')`,
        fontWeight: 500,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayRoman.ttf') format('truetype')`,
        fontWeight: 400,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayLight.ttf') format('truetype')`,
        fontWeight: 300,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'NeueHaasDisplay',
        src: `url('/assets/fonts/NeueHaasDisplayThin.ttf') format('truetype')`,
        fontWeight: 100,
        fontStyle: 'normal',
      },
    ],
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  colors: {
    link: '#737A91',
    bgbtn: '#0154AA',
    headingColor: '#333333',
    textColor: '#585D6E',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
});