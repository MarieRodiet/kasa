import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/AppLayout/index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/AppLayout/Header';
import Error from './pages/Error';
import Rental from './pages/Rental';
import Footer from './components/AppLayout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rental/:id" element={<Rental />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
