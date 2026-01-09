import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropRecommendations from './pages/CropRecommendations';
import Marketplaces from './pages/Marketplaces';
import HarvestRequests from './pages/HarvestRequests';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Singup from './pages/Singup';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-recommendations" element={<CropRecommendations />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/harvest-requests" element={<HarvestRequests />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;