import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/index';
import ContactPage from './Pages/Contact/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
      </Routes>
    </Router>
  );
}

export default App;