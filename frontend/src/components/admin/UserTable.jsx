import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(res.data);
      } catch (err) {
        alert("Failed to fetch users: " + (err.response?.data?.message || ""));
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      alert("Failed to delete user: " + (err.response?.data?.message || ""));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">User List</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full table-auto divide-y divide-gray-100">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
            <tr>
              {["Name", "Number", "Email", "Action"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 tracking-wide"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-gray-800 text-sm">{user.fullName}</td>
                <td className="px-6 py-4 text-gray-800 text-sm">{user.phone}</td>
                <td className="px-6 py-4 text-gray-800 text-sm">{user.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-red-200 transition"
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-6 text-sm">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
