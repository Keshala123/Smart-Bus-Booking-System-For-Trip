import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/booking/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBookings(res.data);
      } catch (err) {
        setError("Failed to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-32">
        <p className="text-gray-600 text-lg">Loading bookings...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-32">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        My Bookings
      </h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bookings found.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Trip:</p>
                  <p>{booking.type}</p>
                </div>
                <div>
                  <p className="font-semibold">Date:</p>
                  <p>{booking.date}</p>
                </div>
                <div>
                  <p className="font-semibold">From:</p>
                  <p>{booking.from}</p>
                </div>
                <div>
                  <p className="font-semibold">To:</p>
                  <p>{booking.to}</p>
                </div>
                <div>
                  <p className="font-semibold">Name:</p>
                  <p>{booking.name}</p>
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>{booking.number}</p>
                </div>
                <div className="col-span-2 mt-4">
                  <p className="font-semibold inline-block mr-2">Status:</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "Waiting"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBookings;
