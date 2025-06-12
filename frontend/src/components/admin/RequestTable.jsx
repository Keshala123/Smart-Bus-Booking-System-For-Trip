import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestTable = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/booking/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRequests(res.data);
      } catch (err) {
        setError("Failed to fetch booking requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:5000/api/booking/${id}/status`,
        { status: "Accepted" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id === id ? { ...req, status: "Accepted" } : req
        )
      );
      alert(`✅ Request ${id} accepted!`);
    } catch (err) {
      alert("Failed to accept the request.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:5000/api/booking/${id}/status`,
        { status: "Deleted" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests((prevRequests) =>
        prevRequests.filter((req) => req._id !== id)
      );
      alert(`❌ Request ${id} deleted!`);
    } catch (err) {
      alert("Failed to delete the request.");
    }
  };

  if (loading) return <p>Loading booking requests...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-2xl rounded-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Travel Requests</h2>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
            <tr>
              {["Type", "Date", "From", "To", "Name", "Number", "Status", "Actions"].map((head) => (
                <th
                  key={head}
                  className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider text-left"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {requests.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-6">
                  No active requests.
                </td>
              </tr>
            ) : (
              requests.map((r) => (
                <tr key={r._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3 text-sm">{r.type}</td>
                  <td className="px-6 py-3 text-sm">{r.date}</td>
                  <td className="px-6 py-3 text-sm">{r.from}</td>
                  <td className="px-6 py-3 text-sm">{r.to}</td>
                  <td className="px-6 py-3 text-sm">{r.name}</td>
                  <td className="px-6 py-3 text-sm">{r.number}</td>
                  <td className="px-6 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        r.status === "Accepted"
                          ? "bg-green-100 text-green-800"
                          : r.status === "Waiting"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm space-x-2">
                    {r.status === "Waiting" && (
                      <>
                        <button
                          onClick={() => handleAccept(r._id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDelete(r._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;
