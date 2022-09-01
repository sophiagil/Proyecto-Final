import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ActividadesPage from './pages/ActividadesPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';

import './styles/GeneralStyles.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
	<Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/actividades" element={<ActividadesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;







