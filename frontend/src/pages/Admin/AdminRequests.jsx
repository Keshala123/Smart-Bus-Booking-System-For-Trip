// src/pages/admin/AdminRequests.jsx
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import RequestTable from "../../components/admin/RequestTable";

const AdminRequests = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50 min-h-screen p-6">
        <div className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Admin Requests
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">View and respond to requests.</p>
        </div>
        <div className="m-8">
          <RequestTable />
        </div>  
      </div>
    </div>
  );
};

export default AdminRequests;
