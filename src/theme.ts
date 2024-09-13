import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#F8D8B8",
      dark: "#004832",
      contrastText: "#000000",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#FFD012",
      contrastText: "#FF0000",
      dark: '#002700',
    },
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

const theme = createTheme({
  ...baseTheme,
  typography: {
    h1: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontSize: "26px",
      fontWeight: 700,
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "36px",
      },
    },
    h2: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "19.5px",
      color: "#FFFFFF",
    },
    h3: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "36px",
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "24px",
      },
    },
    h4: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#000000",
      width: "auto",
    },
    h5: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    h6: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "16px",
        lineHeight: "24px",
      }
    },
    button: {
      fontFamily: "Robot, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      color: "#002700",
    },
  },
});

export default theme;
