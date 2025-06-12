// src/pages/admin/AdminUsers.jsx
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import UserTable from "../../components/admin/UserTable";

const AdminUsers = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50 min-h-screen p-6">
        <div className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Admin Users
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">Manage all users here.</p>
        </div>
        <div className="m-8">
          <UserTable />
        </div>  
      </div>
    </div>
  );
};

export default AdminUsers;
