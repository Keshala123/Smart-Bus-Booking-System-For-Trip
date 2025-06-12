import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaUserFriends, FaEnvelopeOpenText } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white/70 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
            A
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-indigo-700 tracking-wide">Admin</h1>
            <p className="text-xs text-gray-400 mt-1">Dashboard Control</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="space-y-5">
          <h4 className="text-sm text-gray-500 uppercase tracking-widest font-semibold pl-2">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`
                }
              >
                <FaUserFriends />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/requests"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`
                }
              >
                <FaEnvelopeOpenText />
                <span>Requests</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Exit Button */}
      <div className="mt-10">
        <button className="flex items-center w-full gap-3 px-4 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-300 text-sm font-semibold shadow-sm hover:scale-[1.02]">
          <FaSignOutAlt />
          <span>Exit</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
