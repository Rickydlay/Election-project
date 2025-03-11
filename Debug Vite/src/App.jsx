import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";  // Your other pages
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import AdminDashboard from "./pages/AdminDashboard";
import CandidateOverview from "./pages/CandidateOverview";
import About from "./pages/About";
import "./styles/index.css"; // Global styles if any

function App() {
  return (
    <Router>
      <>
        <Header />
        <Hero />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<Results />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/candidate-overview" element={<CandidateOverview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
