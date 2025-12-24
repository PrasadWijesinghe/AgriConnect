import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CropRecommendations from './pages/CropRecommendations';
import AIChatbot from './pages/AIChatbot';
import Marketplaces from './pages/Marketplaces';
import HarvestRequests from './pages/HarvestRequests';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-recommendations" element={<CropRecommendations />} />
        <Route path="/ai-chatbot" element={<AIChatbot />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/harvest-requests" element={<HarvestRequests />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;