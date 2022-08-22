import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
        <HashRouter basename="/">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </HashRouter>
    </React.StrictMode>
);
