import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import BackToTop from './components/UI/BackToTop';
import Loader from './components/UI/Loader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Services from './pages/Services';
import Order from './pages/Order';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <Navbar />
          <WhatsAppFloat />
          <BackToTop />

          <main style={{ minHeight: '80vh', padding: '0' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/services" element={<Services />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
