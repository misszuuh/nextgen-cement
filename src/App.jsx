import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import LocationNetwork from './pages/LocationNetwork';
import MarketOpportunity from './pages/MarketOpportunity';
import ESG from './pages/ESG';
import Products from './pages/Products';
import Investment from './pages/Investment';
import Roadmap from './pages/Roadmap';
import Partnerships from './pages/Partnerships';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technology" element={<Technology />} />
          <Route path="location" element={<LocationNetwork />} />
          <Route path="market" element={<MarketOpportunity />} />
          <Route path="esg" element={<ESG />} />
          <Route path="products" element={<Products />} />
          <Route path="investment" element={<Investment />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;