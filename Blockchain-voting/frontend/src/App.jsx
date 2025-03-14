import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Vote from './pages/Vote/Vote';
import Result from './pages/Result/Result';
import About from './pages/About/About';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/results" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;