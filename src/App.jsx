import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from './pages/Home/Home';
import TrendingShoes from './pages/TrendingShoes/TrendingShoes';
import LimitedEdition from './pages/LimitedEdition/LimitedEdition';
import Contact from './pages/Contact/Contact';
import Login from './pages/login/Login';
import Cart from './pages/Cart/cart/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending-shoes" element={<TrendingShoes />} />
        <Route path="/limited-edition" element={<LimitedEdition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;