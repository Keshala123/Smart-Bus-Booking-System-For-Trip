import React from "react";
import Sidebar from "../../components/user/Sidebar";
import AccountEdit from "../../components/user/AccountEdit";
import AccountDetails from "../../components/user/AccountDetails";

const AccountsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-blue-50 min-h-screen p-6">
        <div className="text-center text-xl font-semibold text-gray-800 mb-6">
          Accounts
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">Manage your accounts here.</p>
        </div>
        <div className="m-8">
          <AccountDetails />
        </div>  
      </div>
    </div>
  );
};

export default AccountsPage;
