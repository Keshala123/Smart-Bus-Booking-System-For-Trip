import React, { useState, useEffect } from "react";
import AccountEdit from "./AccountEdit";
import axios from "axios";

const AccountDetails = () => {
  const [account, setAccount] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch account details on mount
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAccount({
          name: res.data.fullName,
          number: res.data.phone,
          email: res.data.email,
        });
      } catch (err) {
        alert(
          "Failed to fetch account details: " +
            (err.response?.data?.message || "Please try again later.")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, []);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveFromModal = async (updatedAccount) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/auth/me",
        {
          fullName: updatedAccount.name,
          phone: updatedAccount.number,
          email: updatedAccount.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAccount({
        name: res.data.fullName,
        number: res.data.phone,
        email: res.data.email,
      });
      setIsEditModalOpen(false);
      alert("Profile updated!");
    } catch (err) {
      alert(
        "Failed to update profile: " +
          (err.response?.data?.message || "Please try again later.")
      );
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="text-3xl font-bold text-gray-800 mb-8">
          Account Details
        </div>
        <div className="bg-white shadow-xl rounded-3xl px-10 py-8 w-full max-w-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 border-b pb-2">
            Profile Information
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={account.name}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                value={account.number}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={account.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleEditClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {isEditModalOpen && (
          <AccountEdit
            account={account}
            onSave={handleSaveFromModal}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
