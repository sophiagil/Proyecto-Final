import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ActividadesPage from './pages/ActividadesPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
import ActividadesBlog1 from './pages/ActividadesBlog1';
import ActividadesBlog2 from './pages/ActividadesBlog2';
import ActividadesBlog3 from './pages/ActividadesBlog3';

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
        <Route path="/ActividadesBlog1" element={<ActividadesBlog1 />} />
        <Route path="/ActividadesBlog2" element={<ActividadesBlog2 />} />
        <Route path="/ActividadesBlog3" element={<ActividadesBlog3 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;







