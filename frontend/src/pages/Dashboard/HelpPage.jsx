import React from "react";
import Sidebar from "../../components/user/Sidebar";

const HelpPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-blue-50 min-h-screen p-6">
        <div className="text-center text-xl font-semibold text-gray-800 mb-6">
          Help
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">How can we help you?</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
