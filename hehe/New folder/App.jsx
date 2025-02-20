import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="container text-center">
      <h1 className="text-primary">Bootstrap is Working!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
  );
}

export default App;

