import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ActividadesPage from './pages/ActividadesPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import ActividadItem from './pages/ActividadItem';

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
        <Route path="/NovedadesPage" element={<NovedadesPage />} />
        <Route path="/ActividadItem" element={<ActividadItem />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;







