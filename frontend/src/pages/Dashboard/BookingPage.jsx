import React from "react";
import Sidebar from "../../components/user/Sidebar";
import BookingForm from "../../components/user/BookingForm";

const BookingPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-blue-50 min-h-screen p-6">
        <div className="text-center text-xl font-semibold text-gray-800 mb-6">
          Booking
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">Welcome to Booking Page!</p>
        </div>
        <div className="m-8">
          <BookingForm />
        </div>
        
      </div>
    </div>
  );
};

export default BookingPage;
