import { memo } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="header-container">

      {/* Logo */}
      <div className="logo">
        <h2>MyCompany</h2>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Button */}
      <button className="login-btn">Login</button>

    </header>
  );
};

export default memo(Header);