import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import React from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import theme from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Normalize default browser styles */}
      <CssBaseline />

      {/* App Components */}
      <Navbar />
      <main style={{ marginTop: "4rem" }}>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
