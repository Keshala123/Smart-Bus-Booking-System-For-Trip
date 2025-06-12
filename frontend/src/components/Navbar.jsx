import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center space-x-1">
          <span>Easy</span>
          <span className="text-gray-700">Bus</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-4 text-gray-700">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="hover:text-blue-500 transition">Home</Link>
              <Link to="/login" className="hover:text-blue-500 transition">Login</Link>
              <Link to="/signup" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
