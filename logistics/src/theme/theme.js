import { createTheme } from "@mui/material/styles";

// src/theme/theme.js

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#ff4081", // Customize your secondary color
    },
    background: {
      default: "#f4f4f4", // Background color
    },
    text: {
      primary: "#333333", // Default text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Default font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

export default theme;
