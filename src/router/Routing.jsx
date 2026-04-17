import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import PageNotFound from "../pages/PageNotFound";

import Dashboard from "../admin/Dashboard";
import User from "../admin/User";
import Product from "../admin/Product";
import Sidebar from "../components/Sidebar";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Sidebar/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="product" element={<Product />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;