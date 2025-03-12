// src/router/Routes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Candidate from "../pages/Candidate Overview/Candidate";
import About from "../pages/About/About";
import AdminLogin from "../pages/Profile/Login.jsx";
import AdminDashboard from "../pages/Profile/Admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all pages with Header & Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/candidate/:id", element: <Candidate /> },
      { path: "/about", element: <About /> },
      { path: "/admin/login", element: <AdminLogin /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
    ],
  },
]);

export default router;
