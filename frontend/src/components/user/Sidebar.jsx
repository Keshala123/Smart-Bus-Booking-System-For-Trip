import React, { useEffect, useState } from "react";
import {
  Calendar,
  MessageSquare,
  Users,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // User state
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch user profile on mount
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser({
          fullName: res.data.fullName,
          email: res.data.email,
          phone: res.data.phone,
        });
      } catch (err) {
        alert(
          "Failed to fetch user profile: " + (err.response?.data?.message || "Please try again later.")
        );
        // Handle error or redirect to login if unauthorized
      }
    };
    fetchUser();
  }, []);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Booking", path: "/dashboard/booking", icon: Calendar },
    { label: "Response", path: "/dashboard/response", icon: MessageSquare },
  ];

  const otherItems = [
    { label: "Accounts", path: "/dashboard/accounts", icon: Users },
    { label: "Help", path: "/dashboard/help", icon: HelpCircle },
  ];

  return (
    <div className="w-64 h-screen bg-white/70 backdrop-blur-md border-r border-gray-200 shadow-2xl p-6 flex flex-col justify-between transition-all duration-300">
      {/* Header - Profile */}
      <div>
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
            {user.fullName ? user.fullName[0].toUpperCase() : "U"}
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-indigo-700 tracking-wide">
              {user.fullName || "User"}
            </h1>
            <p className="text-xs text-gray-400 mt-1">{user.email}</p>
          </div>
        </div>

        {/* Main Menu */}
        <div className="space-y-6">
          <div>
            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Menu</h4>
            <ul className="space-y-2">
              {navItems.map(({ label, path, icon: Icon }) => (
                <li
                  key={path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                    isActive(path)
                      ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700"
                  }`}
                  onClick={() => navigate(path)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Others</h4>
            <ul className="space-y-2">
              {otherItems.map(({ label, path, icon: Icon }) => (
                <li
                  key={path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                    isActive(path)
                      ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700"
                  }`}
                  onClick={() => navigate(path)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Exit Button */}
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-all duration-300 cursor-pointer font-medium text-sm shadow-sm hover:scale-[1.02]"
        onClick={() => {
          localStorage.removeItem("token");
          // Optionally remove userId, etc.
          navigate("/login");
        }}
      >
        <LogOut size={18} />
        <span>Exit</span>
      </div>
    </div>
  );
};

export default Sidebar;
