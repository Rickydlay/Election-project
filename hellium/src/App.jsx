import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Home from './pages/Home/Home';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        {/* Vite + React Branding */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {/* Routes */}
        <Routes>
          {/* Home Page (With Hero) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />

          {/* Admin Dashboard (Without Hero) */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* Counter Section */}
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Router>
  );
}

export default App;
