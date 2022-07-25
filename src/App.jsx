import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FirstPage from './pages/First-page';
import SecondPage from './pages/Second-page';
import ThirdPage from './pages/ThirdPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ height: '2rem' }} />
      <Routes>
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
