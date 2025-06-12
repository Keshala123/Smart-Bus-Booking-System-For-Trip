import React, { useState } from "react";

const AccountEdit = ({ account, onSave, onClose }) => {
  const [editedAccount, setEditedAccount] = useState({ ...account });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedAccount);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-fadeIn">
        {/* Title */}
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Edit Account
        </h2>

        {/* Input Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={editedAccount.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              value={editedAccount.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={editedAccount.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onClose}
            className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-xl hover:bg-gray-100 transition font-medium shadow-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition font-semibold shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountEdit;
