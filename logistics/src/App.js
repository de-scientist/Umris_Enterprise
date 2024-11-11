// src/App.js
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '4rem' }}>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
