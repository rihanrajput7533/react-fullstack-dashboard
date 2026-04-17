import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    // Example: remove token (if using auth)
    localStorage.removeItem("token");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        
        {/* Logo */}
        <div className="logo-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
            alt="logo"
          />
          <h2>MyCompany</h2>
        </div>

        {/* Links */}
        <nav>
          <NavLink to="dashboard" onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="user" onClick={() => setOpen(false)}>Users</NavLink>
          <NavLink to="product" onClick={() => setOpen(false)}>Products</NavLink>
        </nav>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* Main */}
      <div className="main">

        <div className="header">
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>

          <h3>Admin Panel</h3>

          <div className="profile">
            <img src="https://i.pravatar.cc/40" alt="user" />
          </div>
        </div>

        <div className="content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;