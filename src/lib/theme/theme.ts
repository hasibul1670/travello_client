import {createTheme} from "@mui/material/styles";

// Light Mode Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
      light: "#f8f8f8",
    },
    background: {
      default: "#021531",
      paper: "#f4f4f4",
    },
    text: {
      primary: "#0B1134CC",
      secondary: "#f4f4f4",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
  // shadows: ["none", "0px 5px 22px lightgray"],
});

// Dark Mode Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#666f73",
      light: "#f8f8f8",
    },
    background: {
      default: "#021531",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#ffffff",
    },
  },
  // shadows: ["none", "0px 5px 22px #333"], // Example shadow for dark mode
});
